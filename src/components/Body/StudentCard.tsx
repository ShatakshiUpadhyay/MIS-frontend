import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import EditStudent from "./EditStudent";
import { useNavigate } from "react-router-dom";
import classes from "./styles/StudentCard.module.css";
import { useEffect } from "react";

export default function StudentCard(prop: any) {
  const navigate = useNavigate();
  const editPage = () => {
    console.log("edit page");
    return navigate("/edit");
  };

  useEffect(() => {

  }, []);

  const card = (
    <React.Fragment>
      <div>
        <CheckBoxIcon></CheckBoxIcon>
      </div>
      <div>
        <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
      </div>
      <CardContent className={classes.parent}>
        <div className={classes.leftChild}>
          <Typography variant="h5" component="div">
            First Name :
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            MiddleName:
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Last Name:
          </Typography>
        </div>

        <div className={classes.rightChild}>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Date of Birth :
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Favourite Subject :
          </Typography>

          <CardActions>
            <div onClick={() => editPage()}>
              
              <EditIcon id="edit">Edit</EditIcon>
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
      <Card>{card}</Card>
      <br />
      <br />
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
