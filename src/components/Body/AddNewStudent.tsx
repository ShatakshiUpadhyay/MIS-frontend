import React, { useEffect } from 'react'
import {
  Formik,
  Form,
} from 'formik'
import { Button, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import classes from './styles/StudentCard.module.css'
import SubjectDropDown from './SubjectDropDown'
function AddNewStudent() {
    const currentStudent: any = {
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        favouriteSubject: "",
      }
    return (
    
        <Box className={classes.box}>
          <Typography variant="h2" component="div">
              Add New Student
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
                placeholder='Date of Birth(yyyy-mm-dd)'
                value={currentStudent.dateOfBirth.slice(0,10)}
              />
              <br />
              <SubjectDropDown/>
              <br></br>
              <Button variant='contained' className={classes.content} type='submit'>
                Add
              </Button>
            </Form>
          </Formik>
        </Box>
      )
}

export default AddNewStudent