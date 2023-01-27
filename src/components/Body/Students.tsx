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
  const [mapStudents , setMapStudents] = useState<any>(students)

  async function fetchStudents() {
    const results = await axios.get(`${API_HOST_LOCAL}/Student/GetAll`);
    setStudents(results.data);
    setMapStudents(results.data)
  }

  async function deleteSelected() {
    console.log(selectedStudents);
    if (selectedStudents.length === 0) {
      window.alert("No students selected");
    } else {
      const results = await axios.delete(`${API_HOST_LOCAL}/Student/DeleteMultiple?Ids=` + selectedStudents.toString() )
      if(results.status !== 200){
        window.alert("Students could not be deleted");
      }
      fetchStudents();
    }
  }

  function addSelected(id: any) {
    setSelectedStudents([...selectedStudents, id]);
  }
  function removeSelected(id: any) {
    let fliteredList = selectedStudents.filter((item : any) => item !== id)
    setSelectedStudents(fliteredList);
  }
  function filterBySubject(subjectId:any){
    let filteredStudents = students.filter((item:any)=>item.subjectId===subjectId)
    setMapStudents(filteredStudents);
    // console.log("&&&&&&&&",filteredStudents)
    // console.log(students) 
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <SubHeader deleteSelected={deleteSelected} selectedStudentsLength={selectedStudents.length} filterBySubject={filterBySubject}/>
      { 
        students.length ? mapStudents.map((student: any) => {
        return (
          <StudentCard
            key={student.id}
            student={student}
            addSelected={addSelected}
            removeSelected={removeSelected}
            fetch = {fetchStudents}
          />
        );
         
      }) : <></>
    }
      
    
    </>
  );
}

export default Students;
