const express = require("express");
const linkRoutes = require("./routes/index");

const port = 1245;

const app = express();

app.use("/", linkRoutes);
app.use("/students", linkRoutes);
app.use("/students/:major", linkRoutes);

app.listen(port);

export default app;
