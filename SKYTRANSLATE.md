# SkyTranslate — Wave 2 slot #96

SkyTranslate is a deterministic localization catalog boundary for SKYCOIN4444. It validates locale identifiers and translation keys, stores caller-supplied message catalogs in memory, normalizes locale casing, and returns either a catalog value or an explicit caller-provided fallback.

## Integration contract

Results use schema `sky.translate.result.v1` with `locale`, `key`, `text`, and `source` fields. Mobile, web, education, and messaging components can consume this contract without coupling to any external translation provider.

## Boundaries

This is an engineering-beta localization library. It does not call an AI model or third-party translation API, detect languages, guarantee translation quality, persist catalogs, synchronize localization content, or represent production deployment. Authentication, tenant isolation, content review, professional translation, and provider credentials remain external concerns.

## Verification

The repository's existing TypeScript build, Jest test suite, and runtime dependency audit cover this module. Tests verify locale normalization, deterministic fallback behavior, and rejection of malformed inputs.
