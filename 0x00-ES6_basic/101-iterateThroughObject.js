export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const employee of reportWithIterator) {
    result += `${employee} | `;
  }
  // Remove the last ' | ' from the result string
  return result.slice(0, -3);
}
