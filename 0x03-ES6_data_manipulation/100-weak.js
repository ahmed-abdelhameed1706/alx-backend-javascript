export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  if (!(weakMap.has(endPoint))) {
    weakMap.set(endPoint, 0);
  }

  const counter = weakMap.get(endPoint);

  if (counter >= 5) {
    throw new Error('Endpoint load is high.');
  }
  weakMap.set(endPoint, counter + 1);
}
