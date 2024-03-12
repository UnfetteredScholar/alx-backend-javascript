export default function getStudents() {
  const result = [];

  result.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  result.push({ id: 2, firstName: 'James', location: 'Columbia' });
  result.push({ id: 3, firstName: 'Serena', location: 'San Francisco' });

  return result;
}
