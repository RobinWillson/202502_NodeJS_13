import { Button, Dialog, Paper, TextField, Typography } from "@mui/material";

const FormDialog = ({ onClose, open, formik }) => {
  return (
    <Dialog
      onClose={ onClose }
      open={ open }
    >
      <Paper sx={ {
        p: 2,
        width: "400px",
        display: "flex",
        flexDirection: "column",
        gap: 1,
      } }>
        <Typography variant="h6"
          sx={ { textAlign: "center", mb: 1 } }>
          Create a New Post
        </Typography>
        <TextField
          label="Title"
          value={ formik.values.title }
          onChange={ formik.handleChange("title") }
          onBlur={ formik.handleBlur("title") }
          error={ formik.touched.title && formik.errors.title }
          helperText={ formik.touched.title && formik.errors.title }
          fullWidth />
        <TextField
          label="Body"
          value={ formik.values.body }
          onChange={ formik.handleChange("body") }
          onBlur={ formik.handleBlur("body") }
          error={ formik.touched.body && formik.errors.body }
          helperText={ formik.touched.body && formik.errors.body }

          fullWidth />
        <Button
          variant="contained"
          sx={ { mt: 1 } }
          disabled={
            !formik.isValid ||
            formik.isSubmitting ||
            (!formik.dirty && formik.isValid)
          }
          fullWidth>
          Create</Button>
      </Paper>
    </Dialog>
  );
};

export default FormDialog;