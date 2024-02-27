const http = require('http');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  let numberOfStudents = 0;
  const studentsInField = {};

  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const rows = data.split('\n');

    let response = '';
    for (let i = 1; i < rows.length; i += 1) {
      const row = rows[i].trim();

      if (row !== '') {
        numberOfStudents += 1;

        const columns = row.split(',');
        const firstName = columns[0];
        const field = columns[columns.length - 1];

        if (Object.prototype.hasOwnProperty.call(studentsInField, field)) {
          studentsInField[field].push(firstName);
        } else {
          studentsInField[field] = [firstName];
        }
      }
    }

    response += `Number of students: ${numberOfStudents}\n`;

    const keys = Object.keys(studentsInField);
    keys.forEach((key, index) => {
      response += `Number of students in ${key}: ${
        studentsInField[key].length
      }. List: ${studentsInField[key].join(', ')}`;
      if (index !== keys.length - 1) {
        response += '\n'; // Add newline if not the last key
      }
    });

    resolve(response);
  });
});

const port = 1245;
const path = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(path).then((data) => {
      res.write('This is the list of our students\n');
      res.end(data);
    });
  }
});

app.listen(port);

module.exports = app;
