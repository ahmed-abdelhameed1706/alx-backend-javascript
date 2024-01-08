export default function updateStudentGradeByCity(studentsArray, city, newGrades) {
  const studentsByCity = studentsArray.filter((student) => student.location === city)
    .map((fltrstd) => {
      const newGrade = newGrades.filter((studentGrade) => studentGrade.studentId === fltrstd.id);

      const student = { ...fltrstd };
      if (newGrade.length > 0) {
        student.grade = newGrade[0].grade;
      } else {
        student.grade = 'N/A';
      }
      return student;
    });

  return studentsByCity;
}
