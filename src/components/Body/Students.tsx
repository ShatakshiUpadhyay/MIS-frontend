import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./styles/Students.module.css";
import SubHeader from "./SubHeader";
import { API_HOST_LOCAL } from "../../env-config";
import StudentCard from "./StudentCard";

function Students() {
  const [students, setStudents] = useState<any>([]);
  const [selectedStudents, setSelectedStudents] = useState<any>([]);

  async function fetchStudents() {
    const results = await axios.get(`${API_HOST_LOCAL}/Student/GetAll`);
    // console.log(results.data)
    setStudents(results.data);
  }

  async function deleteSelected() {
    console.log(selectedStudents);
    if (selectedStudents.length === 0) {
      window.alert("No students selected");
    } else {
      console.log(selectedStudents.toString());
      const results = await axios.delete(`${API_HOST_LOCAL}/Student/DeleteMultiple?Ids=` + selectedStudents.toString() )
      if(results.status !== 200){
        window.alert("Students could not be deleted");
      }
      setStudents([]);
    }
  }

  function addSelected(id: any) {
    setSelectedStudents([...selectedStudents, id]);
  }
  function removeSelected(id: any) {
    let fliteredList = selectedStudents.filter((item : any) => item !== id)
    setSelectedStudents(fliteredList);
  }

  useEffect(() => {
    fetchStudents();
  }, [students]);

  return (
    <>
      <SubHeader deleteSelected={deleteSelected} selectedStudentsLength={selectedStudents.length}/>
      { 
        students.length ? students.map((student: any) => {
        return (
          <StudentCard
            key={student.id}
            student={student}
            addSelected={addSelected}
            removeSelected={removeSelected}
          />
        );
         
      }) : <></>
    }
      
    
    </>
  );
}

export default Students;
