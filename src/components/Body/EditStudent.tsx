
import {  Typography } from '@mui/material'
import { Box } from '@mui/system'
import classes from './styles/StudentCard.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import FormikForm from './FormikForm'
import axios from 'axios'
import { API_HOST_LOCAL } from '../../env-config'


function EditStudent(prop:any) {
    const location = useLocation();
    const student = location.state.student;
    const navigate = useNavigate();
    
  const currentStudent: any = {
    firstName: student.firstName,
    middleName: student.middleName,
    lastName: student.lastName,
    dateOfBirth: student.dateOfBirth,
    favouriteSubject: student.subject,
  }
  
  async function editStudent(values : any){
    // console.log(student);
    const payload = {
      id: student.id,
      firstName: values.firstName,
      middleName: values.middleName,
      lastName: values.lastName,
      dateOfBirth: values.dateOfBirth,
      subjectId: values.favouriteSubject.subjectId,
    };
    console.log("******",payload);
    await axios.put(`${API_HOST_LOCAL}/Student/Update?Id=` + student.id, payload).then(
      res => {
        console.log(res.data);
        alert("Student updated successfully")
        navigate(-1);
      }
    ).catch(() => {
      alert("Student could not be updated")
    }
    )
  }

  return (
    
    <Box className={classes.box}>
      <Typography variant="h3" component="div">
          Edit This Student
    </Typography>

    <FormikForm processStudent={editStudent} initialValues={currentStudent} buttonText="Edit"/>
    </Box>
  )
}

export default EditStudent
