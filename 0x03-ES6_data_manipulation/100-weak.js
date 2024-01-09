export const weakMap = new WeakMap();
let counter = 0;

export function queryAPI(endPoint) {
  if (!(weakMap.has(endPoint))) {
    weakMap.set(endPoint, 0);
  }
  if (weakMap.get(endPoint) >= 5) {
    throw new Error('Endpoint load is high.');
  }
  weakMap.set(endPoint, counter += 1);
}
