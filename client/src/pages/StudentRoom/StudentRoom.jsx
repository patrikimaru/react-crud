import { useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button/Button';

const StudentRoom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const selectedIds = query.get('selectedIds');
  const [selectedStudents, setSelectedStudents] = useState([]);

  const viewStudent = async (id) => {
    navigate(`/student/${id}`)
  }

  useEffect(() => {
    if (selectedIds) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/student/getMultiple/${selectedIds}`);
          setSelectedStudents(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [selectedIds]);
  return (
    <div>
      <h2>Student Room</h2>
      {selectedStudents.length > 0 ? (
        <ul>
          {selectedStudents.map((student) => (
            <li key={student._id} className='Card'>
              <p>Student ID: {student._id}</p>
              <p>First Name: {student.firstName}</p>
              <p>Last Name: {student.lastName}</p>
              <p>Age: {student.age}</p>
              <p>Course: {student.course}</p>
              <p>Section: {student.section}</p>
              <Button 
                variant="primary"
                onClick={() => viewStudent(student._id)}>
                  View
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No selected students found.</p>
      )}
    </div>
  );
};

export default StudentRoom;






