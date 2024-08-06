export default function cleanSet(set, startString) {
  const matchedStrings = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      matchedStrings.push(value.slice(startString.length));
    }
  });

  return matchedStrings.join('-');
}
