import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useNavigate } from "react-router-dom";
import StudentCard from "./StudentCard";
import classes from './styles/Students.module.css';

function Students() {
  const navigate = useNavigate();
  const addPage = () => {
    return navigate("/add");
  };
  return (
    <>
      <div className={classes.flexContainer}>
        <div
          className={classes.dropbox}
        >
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-label">
              Favourite Subject
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.addIcon} onClick={addPage}>
          <PersonAddAlt1Icon style={{width : "50", height: "50"}}></PersonAddAlt1Icon>
        </div>
      </div>
      <StudentCard />
    </>
  );
}

export default Students;
