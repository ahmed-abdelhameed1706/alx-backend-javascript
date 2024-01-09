export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0);

  if (length >= position) {
    view.setInt8(position, value);
  } else {
    throw new Error('Position outside range');
  }

  return view;
}
