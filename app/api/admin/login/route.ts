import { NextResponse } from 'next/server';
import { createSessionToken, getCookieName } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    console.log('Login attempt:', { username, password });
    
    const validUsername = process.env.ADMIN_USERNAME || 'admin';
    const validPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (username !== validUsername || password !== validPassword) {
      console.log('Invalid credentials. Expected:', { validUsername, validPassword });
      return NextResponse.json({ error: 'Invalid login' }, { status: 401 });
    }

    console.log('Login successful for:', username);
    const response = NextResponse.json({ success: true });
    response.cookies.set(getCookieName(), createSessionToken(username), {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 8,
      path: '/',
    });
    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
