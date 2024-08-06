const fs = require('fs');

const constStudents = (filepath) => {
  try {
    const data = fs.readFileSync(filepath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // const headers = lines[0].split(',');
    const students = lines.slice(1);

    const totalStudents = students.length;

    console.log(`Number of students: ${totalStudents}`);

    const fields = {};
    students.forEach((student) => {
      const studentData = student.split(',');
      const firstName = studentData[0];
      const field = studentData[3];

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstName);
    });

    Object.entries(fields).forEach(([field, names]) => {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = constStudents;
