export default function getListStudentIds(array) {
  const result = [];
  if (!Array.isArray(array)) {
    return result;
  }

  for (const obj of array) {
    result.push(obj.id);
  }
  return result;
}
