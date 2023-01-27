import { Button, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react'
import classes from "./styles/StudentCard.module.css";
import SubjectDropDown from './SubjectDropDown';

function FormikForm(props : any) {
  return (
    <Formik
    initialValues={props.initialValues}
    onSubmit={(values, actions) => {
      actions.setSubmitting(false);
      props.processStudent(values);
    }}
  >
    {(prop) => {
      return (
        <Form className={classes.form}>
          <TextField
            id="firstName"
            className={classes.content}
            name="firstName"
            placeholder="First Name"
            onChange={prop.handleChange}
            value={prop.values.firstName}
          />
          <br />
          <TextField
            id="middleName"
            className={classes.content}
            name="middleName"
            placeholder="Middle Name"
            onChange={prop.handleChange}
            value={prop.values.middleName}

          />
          <br/>
          <TextField
            id="lastName"
            className={classes.content}
            name="lastName"
            placeholder="Last Name"
            onChange={prop.handleChange}
            value={prop.values.lastName}

          />
          <br />
          <TextField
            id="date"
            className={classes.content}
            name="dateOfBirth"
            type="date"
            placeholder="Date of Birth(yyyy-mm-dd)"
            onChange={prop.handleChange}
            value={prop.values.dateOfBirth.slice(0,10)}

          />
          <br />
          <SubjectDropDown

            onChange={prop.handleChange}
            value={prop.values.favouriteSubject}
            name="favouriteSubject"
            selected={true}

          />
          <br></br>
          <Button
            variant="contained"
            style={{ backgroundColor: "black"}}
            className={classes.content}
            type="submit"
          >
            {props.buttonText}
          </Button>
        </Form>
      );
    }}
  </Formik>
  )
}

export default FormikForm