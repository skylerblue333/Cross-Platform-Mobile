# Sky Mobile Shell

A small React Native application shell for shared iOS/Android UI architecture in the SKYCOIN4444 engineering portfolio.

## Implemented

- React 19 / React Native application component.
- Accessible header, button role/label, and live interaction-count updates.
- Immutable shared interaction-state model with validated counters and timestamps.
- Deterministic unit tests for state transitions and invalid-state rejection.
- Strict TypeScript/JSX checking for `App.tsx` and the shared model.
- Runtime dependency audit in CI.
- Package identity aligned with the mobile implementation rather than an unrelated Express server.

## Product boundary

Status: **engineering beta / mobile shell**.

This repository does not yet contain committed Android or iOS native projects, Expo/EAS configuration, signing/provisioning credentials, push notifications, deep links, secure credential storage, networking/auth integration, offline persistence, app-store builds, device-farm testing, release artifacts, or verified production deployment.

The repository demonstrates and verifies a cross-platform React Native application layer; it does not claim a released iOS or Android application until native build and distribution evidence exists.

## Verify

```bash
npm install
npm run build
npm test
npm run audit:runtime
```

## License

See `LICENSE`.
