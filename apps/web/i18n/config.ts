export const langs = ['sr', 'de'] as const;
export const defaultLang = 'sr';

export type Lang = (typeof langs)[number];

export const langLabels: Record<Lang, string> = {
  sr: 'Srpski',
  de: 'Deutsch',
};
