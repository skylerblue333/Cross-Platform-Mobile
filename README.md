# Sky Mobile Interaction Lab

Sky Mobile Interaction Lab is a small React Native engineering exercise for cross-platform UI state and accessibility behavior. It is intentionally scoped to one screen plus a deterministic state reducer so the repository stays truthful to its size.

**Status: ENGINEERING LAB.** This is not a complete iOS/Android application, app-store release, production client, or replacement for the main SKYCOIN4444 frontend.

## What it demonstrates

- a React Native screen shared by iOS/Android-capable tooling
- deterministic interaction state separated from rendering
- bounded state transitions and goal validation
- progress calculation with an explicit 100% cap
- accessible button roles/labels and a polite live progress region
- TypeScript strict checking and Node-based reducer tests

The screen tracks an interaction count against a small goal, supports reset, and exposes accessibility metadata for controls and progress feedback. The reducer caps interaction counts and rejects invalid goals.

## Verification

```bash
npm install
npm run typecheck
npm test
npm audit --omit=dev --audit-level=high
```

CI runs those same checks. This repository does not currently include native Xcode/Gradle projects, simulator/device automation, signed builds, app-store metadata, push notifications, authentication, persistent storage, networking, or deployment automation. Those omissions are intentional and are why the repository is classified as an engineering lab rather than a standalone production application.

## Architecture

`App.tsx` owns only presentation and dispatches actions. `src/session.ts` contains the framework-light state contract and can be tested without booting a mobile runtime. `tests/session.test.ts` covers increment/reset behavior, bounded goals, count saturation, and progress calculation.

## SKYCOIN4444 relationship

Patterns proven here—small reducers, accessibility labeling, live regions, and UI/state separation—can be reused selectively in the canonical SKYCOIN4444 mobile/frontend work. This lab is not itself an ecosystem dependency.

## Security and privacy

The current lab stores no credentials, personal data, network tokens, or persistent user state. A future app that adds networking, authentication, storage, deep links, or platform permissions must add threat modeling, secure storage, permission handling, dependency review, device-level tests, and release-signing procedures before its status is raised.
