export type Locale = `${string}-${string}` | string;

export interface TranslationCatalog {
  locale: Locale;
  messages: Readonly<Record<string, string>>;
}

export interface TranslationResult {
  schema: 'sky.translate.result.v1';
  locale: string;
  key: string;
  text: string;
  source: 'catalog' | 'fallback';
}

const LOCALE = /^[A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,8})?$/;
const KEY = /^[A-Za-z0-9_.-]{1,120}$/;

function normalizeLocale(locale: string): string {
  if (typeof locale !== 'string' || !LOCALE.test(locale)) throw new Error('invalid locale');
  const [language, region] = locale.split('-');
  return region ? `${language.toLowerCase()}-${region.toUpperCase()}` : language.toLowerCase();
}

export class SkyTranslateCatalog {
  private readonly catalogs = new Map<string, Readonly<Record<string, string>>>();

  register(catalog: TranslationCatalog): void {
    const locale = normalizeLocale(catalog.locale);
    if (!catalog.messages || typeof catalog.messages !== 'object') throw new Error('messages required');
    const clean: Record<string, string> = {};
    for (const [key, value] of Object.entries(catalog.messages)) {
      if (!KEY.test(key)) throw new Error(`invalid translation key: ${key}`);
      if (typeof value !== 'string' || value.length === 0 || value.length > 4000) throw new Error(`invalid translation value: ${key}`);
      clean[key] = value;
    }
    this.catalogs.set(locale, Object.freeze(clean));
  }

  translate(localeInput: string, key: string, fallback: string): TranslationResult {
    const locale = normalizeLocale(localeInput);
    if (!KEY.test(key)) throw new Error('invalid translation key');
    if (typeof fallback !== 'string' || fallback.length === 0 || fallback.length > 4000) throw new Error('invalid fallback');
    const value = this.catalogs.get(locale)?.[key];
    return Object.freeze({
      schema: 'sky.translate.result.v1',
      locale,
      key,
      text: value ?? fallback,
      source: value === undefined ? 'fallback' : 'catalog'
    });
  }
}
