export default function uploadPhoto(filename) {
  return new Promise((res, rej) => {
    if (!filename) {
      res({});
    } else {
      rej(new Error(`${filename} cannot be processed`));
    }
  });
}
