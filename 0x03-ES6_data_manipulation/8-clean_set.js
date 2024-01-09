export default function cleanSet(set, startString) {
  const stringArray = [];

  if (!(set instanceof Set) || typeof startString !== 'string' || !set || !startString) {
    return '';
  }

  for (const element of set.values()) {
    if (typeof element === 'string' && element.startsWith(startString)) {
      stringArray.push(element.slice(startString.length));
    }
  }

  return stringArray.join('-');
}
