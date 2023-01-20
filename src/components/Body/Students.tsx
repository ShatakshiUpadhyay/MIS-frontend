import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from './styles/Students.module.css';
import SubHeader from "./SubHeader"
import { API_HOST_LOCAL } from "../../env-config";
import StudentCard from "./StudentCard";

function Students() {

  const [students, setStudents] = useState<any>([]);

  async function fetchStudents(){
    const results = await axios.get(`${API_HOST_LOCAL}/Student/GetAll`)
    // console.log(results.data)
    setStudents(results.data)
  }

  useEffect(()=>{
    fetchStudents();
  },[])
 
  return (
    <>
      <SubHeader/>
      {
        students.map((student: any)=>{
          return(
              <StudentCard key={student.id} student={student}/>
          );
        }
          
        )
      }
    </>
  );
}

export default Students;
