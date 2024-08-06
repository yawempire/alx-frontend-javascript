const http = require('http');
const url = require('url');
const fs = require('fs');
const path = process.argv[2]; // Path to the CSV file from command line argument

const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const headers = lines[0].split(',');
    const students = lines.slice(1);

    const totalStudents = students.length;

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

    const output = [`Number of students: ${totalStudents}`];

    Object.entries(fields).forEach(([field, names]) => {
      output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });

    resolve(output.join('\n'));
  });
});

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    countStudents(path)
      .then((result) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${result}`);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
