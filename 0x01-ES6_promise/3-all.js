import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let result = '';

  uploadPhoto().then((res) => {
    result += res.body;
  }).then(createUser().then((res) => {
    result = `${result} ${res.firstName} ${res.lastName}`;
  })).finally(() => console.log(result));
}
