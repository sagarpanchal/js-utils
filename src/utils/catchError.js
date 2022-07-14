import { logWarn } from './logWarn';

export function catchError(func, onError) {
  const handleError = (error) => {
    logWarn(error);
    return onError?.(error);
  };
  try {
    const output = func?.();
    if (output?.constructor?.name !== 'Promise') return output;
    if (output?.catch?.constructor?.name !== 'Function') return output;
    return output?.catch?.(handleError);
  } catch (error) {
    return handleError(error);
  }
}
