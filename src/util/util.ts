
export function isNotNullOrUndefined<T>(value: T): value is Exclude<null |undefined, T> {
  return ![null, undefined].includes(value);
}