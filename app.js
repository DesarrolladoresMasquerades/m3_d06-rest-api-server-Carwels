require("dotenv/config");
require("./db");
const express = require("express");

const app = express();

require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes"); //documentation... etc..
app.use("/api", indexRoutes);

const projectRouter = require("./routes/project.routes");
app.use("/api", projectRouter);

const taskRouter = require("./routes/task.routes");
app.use("/api", taskRouter);

require("./error-handling")(app);

module.exports = app;
