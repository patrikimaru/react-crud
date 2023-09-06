
import StudentForm from "../../components/StudentForm/StudentForm";
import Table from "../../components/Table/Table";
import "./HomePage.css";

export default function HomePage() {
 
  return (
    <>
      <h1>School Information</h1>
      <hr/>
      <main>
      <div className="left">
        <h3>Create a Student</h3>
        <StudentForm />
      </div>
      <div className="right">
      <Table/>
      </div>
      </main>
    </>
  );
}


