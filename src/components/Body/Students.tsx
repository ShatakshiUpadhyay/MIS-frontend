import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentCard from "./StudentCard";
import classes from './styles/Students.module.css';
import SubHeader from "./SubHeader"
import { API_HOST_LOCAL } from "../../env-config";

function Students() {

  const [students, SetStudents] = useState<any>([]);

  async function fetchStudents(){
    const results = await axios.get(`${API_HOST_LOCAL}/Student/GetAll`)
    console.log(results)
  }

  useEffect(()=>{
    fetchStudents();
  },[])
 
  return (
    <>
      <SubHeader/>
      <StudentCard />
    </>
  );
}

export default Students;
