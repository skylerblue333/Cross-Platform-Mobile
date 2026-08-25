import { SkyTranslateCatalog } from '../src/translate';

describe('SkyTranslateCatalog', () => {
  test('returns catalog translation with normalized locale', () => {
    const catalog = new SkyTranslateCatalog();
    catalog.register({ locale: 'es-us', messages: { 'home.title': 'Inicio' } });
    expect(catalog.translate('es-US', 'home.title', 'Home')).toEqual({
      schema: 'sky.translate.result.v1',
      locale: 'es-US',
      key: 'home.title',
      text: 'Inicio',
      source: 'catalog'
    });
  });

  test('uses explicit fallback without pretending a live provider exists', () => {
    const catalog = new SkyTranslateCatalog();
    expect(catalog.translate('fr', 'home.title', 'Home').source).toBe('fallback');
  });

  test('rejects malformed locale, key, and values', () => {
    const catalog = new SkyTranslateCatalog();
    expect(() => catalog.translate('bad locale', 'x', 'fallback')).toThrow('invalid locale');
    expect(() => catalog.translate('en', 'bad key!', 'fallback')).toThrow('invalid translation key');
    expect(() => catalog.register({ locale: 'en', messages: { 'x': '' } })).toThrow('invalid translation value');
  });
});
