import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import axios from 'axios';
import "./StudentForm.css";

export default function StudentForm() {
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
    
    const response = await axios.post("http://localhost:5000/student/save", data);
    console.log(response) 
  }   

  return (
    <div className="StudentForm">
      <form onSubmit={handleSubmit}>
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