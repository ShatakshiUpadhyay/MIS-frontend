import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import classes from "./styles/Students.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_HOST_LOCAL } from "../../env-config";
import SubjectDropDown from "./SubjectDropDown";

function SubHeader(prop: any) {
  const navigate = useNavigate();

  function addPage() {
    return navigate("/add");
  };
  function filterStudents(e:any){
    prop.filterBySubject(e.target.value.subjectId);
  }

  return (
    <div className={classes.flexContainer}>
      <div className={classes.dropbox}>
        <FormControl fullWidth style={{ width: "500px" }}>
          <SubjectDropDown onChange = {filterStudents} selected={false}/>
        </FormControl>
      </div>
      <div>
        {prop.selectedStudentsLength > 0 ? (
          <Button
            variant="contained"
            style={{ backgroundColor: "black" }}
            onClick={prop.deleteSelected}
          >
            Delete Selected
          </Button>
        ) : (
          <></>
        )}
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
