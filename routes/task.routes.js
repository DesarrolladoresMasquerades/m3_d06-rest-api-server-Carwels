const express = require("express");
const router = express.Router();

const Task = require("../models/Task.model");
const Project = require("../models/Project.model");

router.post("/", (req, res) => {
  Task.create(req.body)
    .then((newTask) => {
      Project.findByIdAndUpdate(newTask.project, {
        $push: { tasks: newTask._id },
      }).then((_) => res.json(newTask));
    })
    .catch((error) => res.json(error));
});

router.put("/:taskId", (req, res) => {
  delete req.body.project // const { title, description } = req.body

  Task.findByIdAndUpdate(req.params.taskId, req.body) //{title, description}

  .then((updatedTask) => res.json(updatedTask))

  // Task.findById(req.params.taskId).then((task) => {
  //   const oldProject = task.project;
  //   const newProject = req.body.project;

  //   Project.findByIdAndUpdate(oldProject, { $pull: { tasks: task._id } })
  //   .then((_) => {
  //     Project.findByIdAndUpdate(newProject, {$push: {tasks: task._id}})
  //   })
  //   const { title, description } = req.body
  //   task.title = title
  //   task.description = description
  //   task.save()
  //   .then(updatedTask => res.json(updatedTask))
  // });
});

module.exports = router;
