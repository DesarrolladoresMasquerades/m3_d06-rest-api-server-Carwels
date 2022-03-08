express = require("express")
const router = express.Router()

const Project = require("../models/Project.model");

router.get("/:projectId", (req, res) => {
  const { projectId } = req.params;

  Project.findById(projectId)
    .populate("tasks")
    .then((project) => res.json(project))
    .catch((error) => res.json(error));
});

router.put("/:projectId", (req, res) => {
  const { projectId } = req.params;

  Project.findByIdAndUpdate(projectId, req.body, { new: true })
    .then((updatedProject) => res.json(updatedProject))
    .catch((error) => res.json(error));
});

router.delete("/:projectId", (req, res) => {
  const { projectId } = req.params;

  Project.findByIdAndRemove(projectId)
    .then((deletedProject) => res.json(deletedProject))
    .catch((error) => res.json(error));
});

router.get("/", (req, res) => {
  Project.find()
    .populate("tasks")
    .then((projects) => {
      console.log("projects", projects)
      res.json(projects)})
    .catch((error) => res.json(error));
});

router.post("/", (req, res) => {
  Project.create(req.body)
    .then((newProject) => res.json(newProject))
    .catch((error) => res.json(error));
});

module.exports = router;
