export default function handleResponseFromAPI(promise) {
  return promise.then((res) => {
    res({
      status: 200,
      body: 'success',
    });
  }).catch(() => new Error()).finally(() => console.log('Got a response from the API'));
}
