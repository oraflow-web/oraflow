export const locales = ["sr", "de"] as const;
export const defaultLocale = "sr";

export type Locale = (typeof locales)[number];
