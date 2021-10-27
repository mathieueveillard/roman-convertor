export function IdentityFunctor<S>(s: S) {
  return {
    get: () => s,
    map: <T>(fn: (s: S) => T) => IdentityFunctor(fn(s)),
  };
}
