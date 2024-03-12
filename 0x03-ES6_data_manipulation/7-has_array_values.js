export default function hasValuesFromArray(a, array) {
  return array.every((value) => a.has(value));
}
