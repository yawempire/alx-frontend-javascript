export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of map) {
    if (quantity === 1) {
      map.set(item, 100);
    }
  }
}
