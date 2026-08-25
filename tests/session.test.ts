import { initialSession, recordInteraction } from '../src/session';

describe('mobile session model', () => {
  it('records deterministic interaction state', () => {
    const next = recordInteraction(initialSession, new Date('2026-08-24T12:00:00.000Z'));
    expect(next).toEqual({ interactions: 1, lastInteractionAt: '2026-08-24T12:00:00.000Z' });
    expect(initialSession.interactions).toBe(0);
  });

  it('increments from existing state', () => {
    const next = recordInteraction({ interactions: 41, lastInteractionAt: null }, new Date('2026-08-24T13:00:00.000Z'));
    expect(next.interactions).toBe(42);
  });

  it('rejects invalid counters and timestamps', () => {
    expect(() => recordInteraction({ interactions: -1, lastInteractionAt: null }, new Date())).toThrow();
    expect(() => recordInteraction({ interactions: Number.MAX_SAFE_INTEGER, lastInteractionAt: null }, new Date())).toThrow();
    expect(() => recordInteraction(initialSession, new Date('invalid'))).toThrow();
  });
});
