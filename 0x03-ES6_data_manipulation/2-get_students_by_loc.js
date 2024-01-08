export default function getStudentsByLocation(studentsArray, location) {
  return studentsArray.filter((student) => student.location === location);
}
