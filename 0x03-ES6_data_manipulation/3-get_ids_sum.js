export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((total, currentValue) => total + currentValue.id, 0);
  }
  return 0;
}
