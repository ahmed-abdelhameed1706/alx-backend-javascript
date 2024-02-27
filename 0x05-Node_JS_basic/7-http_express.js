const express = require('express');
const fs = require('fs');

const path = process.argv[2];

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
        response += '\n';
      }
    });

    resolve(response);
  });
});

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(path)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch(() => {
      res.send('Cannot load the database');
    });
});

app.listen(port);

module.exports = app;
