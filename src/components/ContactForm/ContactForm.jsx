import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Typography, Box } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import useStyles from "./ContactFormStyles";
import validationSchema from "./ValidationSchemaYup";

const ContactForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
  };

  const onSubmit = (values, onSubmitProps) => {
    alert("We will contact you soon!");
    // console.log(onSubmitProps);
    setTimeout(() => {
      //dummy insert to database
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm(initialValues);
    }, 500);
  };
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          {
            {
              {
                /* console.log(formik); */
              }
            }
          }
          return (
            <Form>
              <Box
                className={classes.boxFormContainer}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Box>
                  <Field
                    variant="filled"
                    component={TextField}
                    name="fullName"
                    label="Full Name"
                  />
                </Box>
                <Box>
                  <Field
                    variant="filled"
                    component={TextField}
                    name="email"
                    type="email"
                    label="Email"
                  />
                </Box>
                <Box>
                  <Field
                    variant="filled"
                    component={TextField}
                    type="text"
                    label="Phone Number"
                    name="phoneNumber"
                  />
                </Box>
                <Box margin={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={formik.isSubmitting}
                    size="large"
                  >
                    <Typography>Contact Me!</Typography>
                  </Button>
                </Box>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default ContactForm;
