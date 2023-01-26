import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import classes from "./styles/StudentCard.module.css";
import SubjectDropDown from "./SubjectDropDown";
import axios from "axios";
import { API_HOST_LOCAL } from "../../env-config";
import FormikForm from "./FormikForm";

function AddNewStudent() {

  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    favouriteSubject: ""
  }
  async function addStudent(values: any) {
    const payload = {
      firstName: values.firstName,
      middleName: values.middleName,
      lastName: values.lastName,
      dateOfBirth: values.dateOfBirth,
      subjectId: values.favouriteSubject.subjectId,
    };
    console.log("******",payload);
    await axios.post(`${API_HOST_LOCAL}/Student/Post`, payload).then(
      res => {
        console.log(res.data);
      }
    );

  }

  return (
    <Box className={classes.box}>
      <Typography variant="h2" component="div">
        Add New Student
      </Typography>
      <FormikForm processStudent={addStudent} initialValues={initialValues} buttonText="Add"/>
    </Box>
  );
}

export default AddNewStudent;
