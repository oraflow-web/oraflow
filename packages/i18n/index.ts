export const locales = ["sr", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "sr";

export function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}
