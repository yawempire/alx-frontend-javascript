export default function getListStudentIds(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
  const getStudentList = students.filter((student) => student.location === city);

  return getStudentList;
}
