const { Router } = require("express");

const {
  getAllTeacher,
  getOneTeacher,
  getMultipleTeacher,
  saveTeacher,
  updateTeacher,
  deleteTeacher,
  deleteMultipleTeacher,
  deleteAllTeacher,
} = require("../controllers/teacherControllers.js");

const teacherRouter = Router();

teacherRouter.get("/getAll", getAllTeacher);
teacherRouter.get("/getOne/:id", getOneTeacher);
teacherRouter.get("/getMultiple/:id", getMultipleTeacher);
teacherRouter.post("/save", saveTeacher);
teacherRouter.put("/update/:id", updateTeacher);
teacherRouter.delete("/delete/:id", deleteTeacher);
teacherRouter.delete("/deleteMultiple/:id", deleteMultipleTeacher);
teacherRouter.delete("/deleteAll", deleteAllTeacher);

module.exports = teacherRouter;