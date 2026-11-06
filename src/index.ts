export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
  clampInput = false,
): number {
  if (![value, inMin, inMax, outMin, outMax].every(Number.isFinite))
    throw new TypeError('All values must be finite');
  if (inMin === inMax) throw new RangeError('Input interval must have nonzero width');
  let t = (value - inMin) / (inMax - inMin);
  if (clampInput) t = Math.min(1, Math.max(0, t));
  return outMin + t * (outMax - outMin);
}
