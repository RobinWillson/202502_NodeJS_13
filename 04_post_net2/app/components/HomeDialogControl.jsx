"use client";
import { Box, Button, Grid2 } from "@mui/material";
import FormDialog from "./FormDialog";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  body: yup.string().required("Body is required")
});

const HomeDialogControl = ({ posts }) => {
  const [toggleDialog, setToggleDialog] = useState(false);
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      createAt: new Date().toISOString()
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <>
      <Grid2 size={ { xs: 12, sm: 6, md: 3 } }>
        <Button
          variant="contained"
          color="secondary"
          sx={ { bgcolor: "salmon " } }
          fullWidth
          onClick={ () => setToggleDialog(true) }
        >
          Create New Post
        </Button>
      </Grid2>
      <FormDialog
        onClose={ () => setToggleDialog(false) }
        open={ toggleDialog }
        formik={ formik }
      />
    </>
  );
};

export default HomeDialogControl;