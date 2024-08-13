export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const result = students.reduce((acc, curr) => acc + curr.id, 0);

  return result;
}
