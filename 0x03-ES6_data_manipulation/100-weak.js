export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  const counter = (weakMap.get(endPoint) || 0) + 1;

  if (counter >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endPoint, counter);
}
