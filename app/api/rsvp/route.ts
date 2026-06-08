import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getDb } from '@/lib/mongodb';
import { getCookieName, verifySessionToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || '').trim();
    const phone = String(body.phone || '').trim();
    const attending = String(body.attending || '').trim();
    const dietary = String(body.dietary || '').trim();
    const message = String(body.message || '').trim();

    // Determine guest count: default to 1 if attending and not specified, 0 if not attending
    let guestCount = 0;
    if (attending === 'Yes') {
      guestCount = Number(body.guestCount) || 1;
    }

    if (!name || !phone || !attending) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const db = await getDb();
    await db.collection('rsvps').insertOne({
      name,
      phone,
      attending,
      guestCount,
      dietary,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to save RSVP' }, { status: 500 });
  }
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getCookieName())?.value;
  if (!verifySessionToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const db = await getDb();
  const rsvps = await db.collection('rsvps').find({}).sort({ createdAt: -1 }).toArray();
  const totalParticipants = rsvps
    .filter((rsvp) => rsvp.attending === 'Yes')
    .reduce((sum, rsvp) => sum + Number(rsvp.guestCount || 0), 0);

  return NextResponse.json({ rsvps, totalParticipants, totalResponses: rsvps.length });
}
