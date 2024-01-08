export default function getStudentIdsSum(studentsArray) {
  const idSum = studentsArray.reduce((p, student) => p + student.id, 0);

  return idSum;
}
