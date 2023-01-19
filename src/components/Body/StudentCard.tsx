import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EditStudent from './EditStudent';
import { useNavigate } from 'react-router-dom';

export default function StudentCard(prop:any) {
    const navigate = useNavigate();
    const editPage =  ()=>{
        console.log("edit page")
        return navigate("/edit")
    }
    const card = (
        <React.Fragment>
          <div>
          <CheckBoxIcon></CheckBoxIcon>
          </div>
          <div>
          <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
          </div>
          <CardContent>
            <Typography variant="h5" component="div">
              First Name
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             MiddleName
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Last Name
            </Typography>
            <CardActions>
            <div onClick={()=>editPage()}><EditIcon>Edit</EditIcon></div>
          </CardActions>
          </CardContent>
        </React.Fragment>
      );
  return (
    <Box sx={{  maxWidth:"80%", minWidth:"70%"}} 
    marginLeft="10%"
    marginRight="10%"
    marginTop="5%"
    >
      <Card variant="outlined">{card}</Card>
      <br/><br/>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}