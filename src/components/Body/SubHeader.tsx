import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import classes from "./styles/Students.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_HOST_LOCAL } from "../../env-config";
import SubjectDropDown from "./SubjectDropDown";

function SubHeader() {

  const navigate = useNavigate();
  const [subjects, setSubjects] = useState<any>([]);

  async function fetchSubjects(){
    const results = await axios.get(`${API_HOST_LOCAL}/Subject/GetAll`)
    setSubjects(results.data)
  }
  const addPage = () => {
    return navigate("/add");
  };
  
  useEffect(()=>{
    fetchSubjects();
  },[])
  
  
  return (
    <div className={classes.flexContainer}>
      <div className={classes.dropbox}>
        <FormControl  fullWidth style={{width:"500px"}}>
          <SubjectDropDown/>
        </FormControl>
      </div>
      <div className={classes.addIcon} onClick={addPage}>
        <PersonAddAlt1Icon
          style={{ width: "30", height: "30" }}
        ></PersonAddAlt1Icon>
      </div>
    </div>
  );
}

export default SubHeader;
