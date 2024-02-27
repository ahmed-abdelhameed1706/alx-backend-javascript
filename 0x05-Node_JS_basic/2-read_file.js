const fs = require('fs');

const countStudents = (path) => {
  let numberOfStudents = 0;

  const studentsInField = {};

  try {
    const data = fs.readFileSync(path, 'utf8');

    const rows = data.split('\n');

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

    console.log(`Number of students: ${numberOfStudents}`);
    for (const key of Object.keys(studentsInField)) {
      if (Object.prototype.hasOwnProperty.call(studentsInField, key)) {
        console.log(
          `Number of students in ${key}: ${
            studentsInField[key].length
          }. List: ${studentsInField[key].join(', ')}`,
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
