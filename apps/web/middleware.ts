import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@oraflow/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip studio routes
  if (pathname.startsWith("/studio")) {
    return;
  }

  // Check if pathname already has a locale
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (!hasLocale) {
    // Redirect to default locale
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|studio).*)"],
};
