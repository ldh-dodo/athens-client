import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const token = searchParams.get('temp-token');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.redirect('/');
  }

  return NextResponse.redirect(`${origin}/login/auth?user=${token}`);
}