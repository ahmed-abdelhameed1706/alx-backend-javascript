const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const linkRoutes = (server) => {
  server.get('/', AppController.getHomepage);

  server.get('/students', StudentsController.getAllStudents);
  server.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

module.exports = linkRoutes;
