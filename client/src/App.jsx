

import { Route,Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import StudentProfile from "./pages/StudentProfile.jsx/StudentProfile";
import StudentRoom from "./pages/StudentRoom/StudentRoom";

export default function App() {
 


  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/student/:id" element={<StudentProfile/>}/>
      <Route exact path="/studentViewAll" element={<StudentRoom/>}/>
    </Routes>
  );
}


