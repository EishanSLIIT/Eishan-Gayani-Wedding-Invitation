import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getCookieName } from '@/lib/auth';

export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete(getCookieName());
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 });
  }
}
