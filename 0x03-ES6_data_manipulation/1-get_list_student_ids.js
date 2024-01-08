export default function getListStudentIds(studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }
  const idArray = studentsArray.map((student) => student.id);
  return idArray;
}
