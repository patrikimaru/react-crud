const { Router } = require("express");

const {
  getAllStudent,
  getOneStudent,
  getMultipleStudent,
  saveStudent,
  updateStudent,
  deleteStudent,
  deleteMultipleStudent,
  deleteAllStudent,
} = require("../controllers/studentControllers.js");

const studentRouter = Router();

studentRouter.get("/getAll", getAllStudent);
studentRouter.get("/getOne/:id", getOneStudent);
studentRouter.get("/getMultiple/:id", getMultipleStudent);
studentRouter.post("/save", saveStudent);
studentRouter.put("/update/:id", updateStudent);
studentRouter.delete("/delete/:id", deleteStudent);
studentRouter.delete("/deleteMultiple/:id", deleteMultipleStudent);
studentRouter.delete("/deleteAll", deleteAllStudent);

module.exports = studentRouter;