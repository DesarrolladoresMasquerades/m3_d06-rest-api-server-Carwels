require("dotenv/config");
require("./db");
const express = require("express");

const app = express();

require("./config")(app);

// 👇 Start handling routes here


const projectRouter = require("./routes/project.routes");
app.use("/api/projects", projectRouter);

const taskRouter = require("./routes/task.routes");
app.use("/api/tasks", taskRouter);

const indexRoutes = require("./routes"); //documentation... etc..
app.use("/", indexRoutes);

require("./error-handling")(app);

module.exports = app;
