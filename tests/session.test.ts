import assert from 'node:assert/strict';
import test from 'node:test';

import { DEFAULT_SESSION, progressPercent, reduceSession } from '../src/session';

test('increments and resets interaction state', () => {
  const incremented = reduceSession(DEFAULT_SESSION, { type: 'increment' });
  assert.equal(incremented.interactions, 1);
  assert.equal(reduceSession(incremented, { type: 'reset' }).interactions, 0);
});

test('updates a bounded integer goal', () => {
  const state = reduceSession(DEFAULT_SESSION, { type: 'set-goal', goal: 10 });
  assert.equal(state.goal, 10);
  assert.throws(() => reduceSession(state, { type: 'set-goal', goal: 0 }), RangeError);
  assert.throws(() => reduceSession(state, { type: 'set-goal', goal: 1001 }), RangeError);
  assert.throws(() => reduceSession(state, { type: 'set-goal', goal: 1.5 }), RangeError);
});

test('caps interaction count and progress', () => {
  const capped = reduceSession({ interactions: 1_000_000, goal: 5 }, { type: 'increment' });
  assert.equal(capped.interactions, 1_000_000);
  assert.equal(progressPercent({ interactions: 7, goal: 5 }), 100);
  assert.equal(progressPercent({ interactions: 2, goal: 5 }), 40);
});
