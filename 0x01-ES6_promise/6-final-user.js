import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName),
    uploadPhoto(fileName)]).then((results) => results.map((result) => ({
    status: result.status,
    value: result.value === 'fulfilled' ? result.value : String(result.reason),
  })));
}
