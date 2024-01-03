import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photoResult, userResult] = await Promise.all([uploadPhoto(), createUser()]);
    return {
      photo: photoResult,
      user: userResult,
    };
  } catch (e) {
    return {
      photo: null,
      user: null,
    };
  }
}
