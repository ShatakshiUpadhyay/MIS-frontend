import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import classes from "./styles/StudentCard.module.css";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox } from "@mui/material";
import { API_HOST_LOCAL } from "../../env-config";
import axios from "axios";

export default function StudentCard(prop: any) {
  const navigate = useNavigate();
  const [studentDetails, setStudent] = useState<any>(prop.student);

  const editPage = () => {
    const student = prop.student;
    return navigate("/edit", { state: { student: student } });
  };

  const handleChange = (e: any) => {
    const { value, checked } = e.target;

    if (checked) {
      prop.addSelected(studentDetails.id);
    } else {
      prop.removeSelected(studentDetails.id);
    }
  };
  
  async function handleDelete(e: any) {
      const result = await axios.delete(
        `${API_HOST_LOCAL}/Student/DeleteSingle/`+ studentDetails.id);
      console.log(result);
      if (result.status !== 200) {
        window.alert("Students could not be deleted");
      }
    
  };

  const card = (
    <React.Fragment>
      <CardContent className={classes.parent}>
        <div>
          <Checkbox onChange={handleChange} />
        </div>
        <div className={classes.leftChild}>
          <Typography variant="h5" component="div">
            {studentDetails.firstName}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {studentDetails.middleName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {studentDetails.lastName}
          </Typography>
        </div>

        <div className={classes.rightChild}>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Date of Birth: {studentDetails.dateOfBirth.slice(0, 10)}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Favourite Subject: {studentDetails.subject.name}
          </Typography>
        </div>
        <div className={classes.card}>
          <CardActions>
            <div onClick={() => editPage()}>
              <EditIcon className={classes.button}>Edit</EditIcon>
            </div>
          </CardActions>
          <CardActions>
            <div>
              <DeleteIcon
                className={classes.button}
                onClick={handleDelete}
              ></DeleteIcon>
            </div>
          </CardActions>
        </div>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Box
      sx={{ maxWidth: "80%", minWidth: "70%" }}
      marginLeft="10%"
      marginRight="10%"
      marginTop="5%"
    >
      <div></div>
      <Card>{card}</Card>
      <br />
      <br />
    </Box>
  );
}
