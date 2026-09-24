import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Only www.retalint.com is canonical; every other host (e.g. this raihsoft.com
// subdomain) still serves content but is marked noindex as a fallback in case
// crawlers don't honor the <link rel="canonical"> tag.
const CANONICAL_HOST = 'www.retalint.com';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const host = request.headers.get('host');

  if (host !== CANONICAL_HOST) {
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};
