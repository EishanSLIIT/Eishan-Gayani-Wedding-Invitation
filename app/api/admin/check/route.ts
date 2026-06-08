import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getCookieName, verifySessionToken } from '@/lib/auth';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(getCookieName())?.value;

    if (verifySessionToken(token)) {
      return NextResponse.json({ authenticated: true });
    }

    return NextResponse.json({ authenticated: false, error: 'Unauthorized' }, { status: 401 });
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json({ error: 'Auth check failed' }, { status: 500 });
  }
}
