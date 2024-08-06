const fs = require('fs');

const countStudents = (filePath) => new Promise((resolve, reject) => {
  // Read the file asynchronously
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      reject(new Error('Cannot load the database'));
      return;
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

    resolve();
  });
});

module.exports = countStudents;
