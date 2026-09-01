import { NextRequest, NextResponse } from 'next/server';
import { langs, defaultLang } from './i18n/config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLang = langs.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`,
  );

  if (!hasLang) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLang}${pathname}`;
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
};
