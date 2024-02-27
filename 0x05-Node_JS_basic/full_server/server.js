const express = require('express');
const linkRoutes = require('./routes/index');

const port = 1245;

const app = express();

linkRoutes(app);

app.listen(port);

export default app;
