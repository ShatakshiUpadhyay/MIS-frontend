import { InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_HOST_LOCAL } from "../../env-config";

function SubjectDropDown(prop: any) {

  const [subjects, setSubjects] = useState<any>([]);

  async function fetchSubjects() {
    const results = await axios.get(`${API_HOST_LOCAL}/Subject/GetAll`);
    setSubjects(results.data);
  }

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <InputLabel id="demo-simple-select-label">Favourite Subject</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={prop.value}
        defaultValue=""
        onChange={prop.onChange}
        name={prop.name}
        style={{ width: "100%" }}
        
      >
        {subjects.map((subject: any, index: number) => {
          return (
            <MenuItem key={index} value={subject}>
              {subject.name}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
}

export default SubjectDropDown;
