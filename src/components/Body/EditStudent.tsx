import React, { useEffect } from 'react'
import {
  Formik,
  Form,
} from 'formik'
import { Button, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import classes from './styles/StudentCard.module.css'
import { useLocation } from 'react-router-dom'
import SubjectDropDown from './SubjectDropDown'

function EditStudent(prop:any) {
    const location = useLocation();
    const student = location.state.student;
    
  const currentStudent: any = {
    firstName: student.firstName,
    middleName: student.middleName,
    lastName: student.lastName,
    dateOfBirth: student.dateOfBirth,
    favouriteSubject: student.subject.name,
  }
  useEffect(()=>{
    
},[])

  return (
    
    <Box className={classes.box}>
      <Typography variant="h3" component="div">
          Edit This Student
    </Typography>

      <Formik
        initialValues={currentStudent}
        onSubmit={(values, actions) => {
          console.log({ values, actions })
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }}
      >
        <Form className={classes.form}>
          <TextField
            id='firstName'
            className={classes.content}
            name='firstName'
            placeholder='First Name'
            value={currentStudent.firstName}
          />
          <br />
          <TextField
            id='lastName'
            className={classes.content}
            name='lastName'
            placeholder='Last Name'
            value={currentStudent.lastName}
          />
          <br />
          <TextField
            id='middleName'
            className={classes.content}
            name='middleName'
            placeholder='Middle Name'
            value={currentStudent.middleName}
          />
          <br />
          <TextField
            id='date'
            className={classes.content}
            name='dateOfBirth'
            placeholder='Date of Birth'
            value={currentStudent.dateOfBirth.slice(0,10)}
          />
          <br />
          {/* <InputLabel id="demo-simple-select-label">
            Favourite Subject
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="favouriteSubject"
            label="favouriteSubject"
            placeholder='Favourite Subject'
            defaultValue={currentStudent.favouriteSubject}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={currentStudent.favouriteSubject}>{currentStudent.favouriteSubject}</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select> */}
          <SubjectDropDown favSubject={currentStudent.favouriteSubject}/>
          <br></br>
          <Button variant='contained' className={classes.content} type='submit'>
            Edit
          </Button>
        </Form>
      </Formik>
    </Box>
  )
}

export default EditStudent
