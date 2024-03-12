export default function updateStudentGradeByCity(students, city, newGrades) {
  const gradeStudent = (student) => {
    const grade = newGrades.find((obj) => obj.studentId === student.id);
    const newStudent = student;

    if (grade !== undefined) {
      newStudent.grade = grade.grade;
    } else {
      newStudent.grade = 'N/A';
    }

    return newStudent;
  };

  if ((students instanceof Array) && (typeof (city) === 'string')) {
    return students.filter((student) => student.location === city).map(gradeStudent);
  }
  return [];
}
