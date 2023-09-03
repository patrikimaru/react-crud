const TeacherModel = require("../models/teacherModel.js");

exports.getAllTeacher = async (req, res) => {
  await TeacherModel.find().then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  });;  
};

exports.getOneTeacher = async (req, res) => {
  const { id } = req.params;
  await TeacherModel.findById(id).then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  });;  
};

exports.getMultipleTeacher = async (req, res) => { 
  const { id } = req.params; 
  const idArray = id.split(',').map(id => id.trim());
  await TeacherModel.find({ _id: { $in: idArray } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
    });
}


exports.saveTeacher = async (req, res) => {
  await TeacherModel.create(req.body)
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
    });
};

exports.updateTeacher = async (req, res) => {
  const { id } = req.params;
  await TeacherModel.findByIdAndUpdate(id, req.body)
    .then((data) => res.send("Update successfully"))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
    });
};

exports.deleteTeacher = async (req, res) => {
  const { id } = req.params;
  await TeacherModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
  });
};


exports.deleteMultipleTeacher = async (req, res) => {
  const { id } = req.params; 
  const idArray = id.split(',').map(id => id.trim());
  await TeacherModel.deleteMany({ _id: { $in: idArray } })
  .then(() => res.send("All data are deleted successfully"))
      .catch((err) => {
        console.log(err);
        res.status(500).send({ error: err, msg: "Something went wrong!" });
    });
 
};

exports.deleteAllTeacher = async (req, res) => {
  await TeacherModel.deleteMany({})
    .then(() => res.send("All data are deleted successfully"))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
  });
};