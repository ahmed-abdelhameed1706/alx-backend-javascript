export default function cleanSet(set, startString) {
  return Array.from(set)
    .filter((element) => (startString.length > 0 ? element.startsWith(startString) : null))
    .map((filteredElement) => filteredElement.slice(startString.length)).join('-');
}
