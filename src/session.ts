export type MobileSession = Readonly<{
  interactions: number;
  lastInteractionAt: string | null;
}>;

export const initialSession: MobileSession = {
  interactions: 0,
  lastInteractionAt: null,
};

export function recordInteraction(session: MobileSession, at: Date): MobileSession {
  if (!Number.isSafeInteger(session.interactions) || session.interactions < 0) {
    throw new Error('interaction count must be a non-negative safe integer');
  }
  if (session.interactions === Number.MAX_SAFE_INTEGER) {
    throw new Error('interaction count limit reached');
  }
  if (Number.isNaN(at.getTime())) {
    throw new Error('interaction timestamp must be valid');
  }
  return {
    interactions: session.interactions + 1,
    lastInteractionAt: at.toISOString(),
  };
}
