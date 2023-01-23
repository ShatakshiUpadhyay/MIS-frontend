import { InputLabel, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_HOST_LOCAL } from '../../env-config';
import classes from "./styles/Students.module.css";


function SubjectDropDown(prop:any) {
const [subjects, setSubjects] = useState<any>([]);

  async function fetchSubjects(){
    const results = await axios.get(`${API_HOST_LOCAL}/Subject/GetAll`)
    setSubjects(results.data)
  }
  
  
  useEffect(() => {
    fetchSubjects()
  }, [])
  return (
    <div  style={{width:"100%"}}>
        
      <InputLabel id='demo-simple-select-label' >Favourite Subject</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        // value={age}
        label='Age'
        // onChange={handleChange}
        style={{width:"100%"}}
        placeholder="Select Favourite Subject"
      >
        {subjects.map((subject: any) => {
          return (
            <MenuItem key={subject.id} value={subject.id} >
              {subject.name}
            </MenuItem>
          )
        })}
      </Select>
    </div>
    
  )
}

export default SubjectDropDown