import readDatabase from '../utils';

const path = process.argv[2];

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(path)
      .then(({ studentsInField }) => {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('This is the list of our students\n');

        const sortedFields = Object.keys(studentsInField).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

        sortedFields.forEach((field, index) => {
          const students = studentsInField[field];
          response.write(
            `Number of students in ${field}: ${
              students.length
            }. List: ${students.join(', ')}`,
          );
          if (index < sortedFields.length - 1) {
            response.write('\n');
          }
        });

        response.end();
      })
      .catch(() => {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(path)
      .then(({ studentsInField }) => {
        const majorStudents = studentsInField[major] || [];

        response.writeHead(200, { 'Content-Type': 'text/plain' });

        response.write(`List: ${majorStudents.join(', ')}`);
        response.end();
      })
      .catch(() => {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
