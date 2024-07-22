// src/components/CallLogForm.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";

// Validation schema using Yup
const validationSchema = Yup.object({
  contactName: Yup.string().required("Required"),
  contactNumber: Yup.string().required("Required"),
  outcome: Yup.string().required("Required"),
  notes: Yup.string(),
});

// Initial form values
const initialValues = {
  contactName: "",
  contactNumber: "",
  outcome: "",
  notes: "",
};

const CallLogForm = ({ addCallLog }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addCallLog(values); // Call the parent function to add the new log
        resetForm(); // Reset the form after submission
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            as={TextField}
            name="contactName"
            label="Contact Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <ErrorMessage
            name="contactName"
            component="div"
            className="error-message"
          />

          <Field
            as={TextField}
            name="contactNumber"
            label="Contact Number"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <ErrorMessage
            name="contactNumber"
            component="div"
            className="error-message"
          />

          <Field
            as={TextField}
            name="outcome"
            label="Outcome"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <ErrorMessage
            name="outcome"
            component="div"
            className="error-message"
          />

          <Field
            as={TextField}
            name="notes"
            label="Notes"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            fullWidth
            style={{ marginTop: "16px" }}
          >
            Add Call Log
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CallLogForm;
