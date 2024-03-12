export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const pair of map) {
    if (pair[1] === 1) {
      map.set(pair[0], 100);
    }
  }
  return map;
}
