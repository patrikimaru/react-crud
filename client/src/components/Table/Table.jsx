import "./Table.css";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoPencil, IoTrashBinOutline } from 'react-icons/io5';
import Input from '../Input/Input';
import Button from '../Button/Button';
import axios from 'axios';

const Table = () => {
  const navigate = useNavigate()
  const [students , setStudents] = useState([]);
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);

  const fetchData = async() => {
    const response = await axios.get("http://localhost:5000/student/getAll");
    setStudents(response.data)
  }
  const handleViewAll = () => {
    navigate(`/studentViewAll?selectedIds=${selectedStudentIds.join(',')}`);
  }

  const viewStudent = async (id) => {
    navigate(`/student/${id}`)
  }
  
  const handleDelete = async (id) => {
    alert("Are you sure you want to delete this?")
    const response = await axios.delete(`http://localhost:5000/student/delete/${id}`);
    console.log("response",response) 
  }   

  const handleCheckboxChange = (id) => {
    if (selectedStudentIds.includes(id)) {
      setSelectedStudentIds(selectedStudentIds.filter((studentId) => studentId !== id));
    } else {
      setSelectedStudentIds([...selectedStudentIds, id]);
    }
  }

  const handleDeleteAll = async () => {
    alert("are you sure you want to delete all")
    const idsToDelete = selectedStudentIds.join(',');
    if (idsToDelete.length === 0) {
      const response = await axios.delete(`http://localhost:5000/student/deleteAll`);
      console.log("response", response);
    } else {
      const response = await axios.delete(`http://localhost:5000/student/deleteMultiple/${idsToDelete}`);
      console.log("response", response);
    }
    
    setSelectedStudentIds([]);
  }

  useEffect(()=>{
    
    fetchData();
  },[students])

  return (
    <div className="table-container">
      <h1>Student Table</h1>
      <div className="button-container">
        <Button onClick={handleViewAll} variant="success">viewAll</Button>
        <Button onClick={handleDeleteAll} variant="danger">deleteAll</Button>
      </div>
      <table className="Card">
        <thead>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Section</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) =>(
            <tr key={student._id}>
              <td>
                <Input type="checkbox"
                  checked={selectedStudentIds.includes(student._id)}
                  onChange={() => handleCheckboxChange(student._id)}
                />
                </td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.age} </td>
              <td>{student.course}</td>
              <td>{student.section}</td>
              <td className="button-container">
                <Button onClick={() => viewStudent(student._id)} variant="icon success"><IoPencil/></Button>
                <Button onClick={() => handleDelete(student._id)} variant="icon danger"><IoTrashBinOutline/></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table