export type SessionState = Readonly<{
  interactions: number;
  goal: number;
}>;

export type SessionAction =
  | Readonly<{ type: 'increment' }>
  | Readonly<{ type: 'reset' }>
  | Readonly<{ type: 'set-goal'; goal: number }>;

export const DEFAULT_SESSION: SessionState = Object.freeze({ interactions: 0, goal: 5 });

export function reduceSession(state: SessionState, action: SessionAction): SessionState {
  switch (action.type) {
    case 'increment':
      return { ...state, interactions: Math.min(state.interactions + 1, 1_000_000) };
    case 'reset':
      return { ...state, interactions: 0 };
    case 'set-goal': {
      if (!Number.isInteger(action.goal) || action.goal < 1 || action.goal > 1000) {
        throw new RangeError('goal must be an integer between 1 and 1000');
      }
      return { ...state, goal: action.goal };
    }
  }
}

export function progressPercent(state: SessionState): number {
  return Math.min(100, Math.round((state.interactions / state.goal) * 100));
}
