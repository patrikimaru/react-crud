const StudentModel = require("../models/studentModel.js");

exports.getAllStudent = async (req, res) => {
  await StudentModel.find().then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  });;  
};

exports.getOneStudent = async (req, res) => {
  const { id } = req.params;
  await StudentModel.findById(id).then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  });;  
};

exports.getMultipleStudent = async (req, res) => { 
  const { id } = req.params; 
  const idArray = id.split(',').map(id => id.trim());
  await StudentModel.find({ _id: { $in: idArray } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
    });
}


exports.saveStudent = async (req, res) => {
  await StudentModel.create(req.body)
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
    });
};

exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  await StudentModel.findByIdAndUpdate(id, req.body)
    .then((data) => res.send("Update successfully"))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
    });
};

exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  await StudentModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
  });
};


exports.deleteMultipleStudent = async (req, res) => {
  const { id } = req.params; 
  const idArray = id.split(',').map(id => id.trim());
  await StudentModel.deleteMany({ _id: { $in: idArray } })
  .then(() => res.send("All data are deleted successfully"))
      .catch((err) => {
        console.log(err);
        res.status(500).send({ error: err, msg: "Something went wrong!" });
    });
    
};

exports.deleteAllStudent = async (req, res) => {
  await StudentModel.deleteMany({})
    .then(() => res.send("All data are deleted successfully"))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
  });
};