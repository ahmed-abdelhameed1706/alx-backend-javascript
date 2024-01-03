export default function handleResponseFromAPI(promise) {
  promise.then((res) => {
    res({
      status: 200,
      body: 'success',
    });
  }).catch((err) => err).finally(console.log('Got a response from the API'));
}
