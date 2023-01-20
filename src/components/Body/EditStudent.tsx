import React from 'react'
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik'
import { Button, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import classes from './styles/StudentCard.module.css'
import { DesktopDatePicker } from '@mui/x-date-pickers'

function EditStudent() {
  const currentStudent: Object = {
    firstName: 'shatakshi',
    middleName: '',
    lastName: '',
    DOB: '',
    FavouriteSubject: '',
  }

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
          />
          <br />
          <TextField
            id='lastName'
            className={classes.content}
            name='lastName'
            placeholder='Last Name'
          />
          <br />
          <TextField
            id='middleName'
            className={classes.content}
            name='middleName'
            placeholder='Middle Name'
          />
          <br />
          <TextField
            id='date'
            label='Birthday'
            type='date'
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <InputLabel id="demo-simple-select-label">
            Favourite Subject
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="favouriteSaubject"
            // onChange={handleChange}
            placeholder='Favourite Subject'
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <br></br>
          <Button variant='contained' className={classes.content} type='submit'>
            Submit
          </Button>
        </Form>
      </Formik>
    </Box>
  )
}

export default EditStudent
