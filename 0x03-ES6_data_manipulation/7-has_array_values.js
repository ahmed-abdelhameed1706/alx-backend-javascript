export default function hasValuesFromArray(setArg, arrayArg) {
  for (const element of arrayArg) {
    if (!setArg.has(element)) {
      return false;
    }
  }
  return true;
}
