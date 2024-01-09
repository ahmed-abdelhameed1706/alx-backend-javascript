export default function cleanSet(set, startString) {
  const stringArray = [];

  if (startString.length < 1) {
    return stringArray.join('-');
  }

  for (const element of set.values()) {
    if (element.startsWith(startString)) {
      stringArray.push(element.slice(startString.length));
    }
  }

  return stringArray.join('-');
}
