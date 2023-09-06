import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom"; 
import axios from "axios";
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const StudentProfile = (props) => {
  const { id } = useParams();
  const [student , setStudent] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [course, setCourse] = useState("");
  const [section , setSection] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      age,
      course,
      section,
    };
    
    const response = await axios.put(`http://localhost:5000/student/update/${id}`, data);
    console.log(response) 
  }

  const fetchData = async() => {
    const response = await axios.get(`http://localhost:5000/student/getOne/${id}`);
    setStudent(response.data)
  }
  

  
  useEffect(()=>{
    
    fetchData();
  },[student])
  
  return (
    <div className='StudentForm'>
      <h1>Student Profile</h1>
      <div className='Card'>
        <p>First Name: {student.firstName}</p>
        <p>Last Name: {student.lastName}</p>
        <p>Age: {student.age}</p>
        <p>Course: {student.course}</p>
        <p>Section: {student.section}</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <h3>Update Student</h3>
        <Input
          type="text"
          placeholder="Enter a First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter a Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Enter an age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter a course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter a section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />
        <Button type="submit" variant="primary" >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default StudentProfile

