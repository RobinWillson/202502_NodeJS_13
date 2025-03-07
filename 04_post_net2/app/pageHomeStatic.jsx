"use client";
import { Box, Button, Container, Grid2, colors } from "@mui/material";
import PostList from "./components/PostList";
import FormDialog from "./components/FormDialog";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  body: yup.string().required("Body is required")
});

const PageHomeStatic = ({ posts }) => {
  // console.log("posts", posts);
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
      <Box sx={ (theme) => ({
        backgroundColor: theme.palette.grey[200],
        width: "100%",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden"
      }) }

      >
        <Container maxWidth="md"
          sx={ {
            m: 0, py: 2,
            // border: "1px solid, red" 
          } }   >
          <Grid2 container spacing={ 2 }
            sx={ {
              height: "100%",
              // border: `2px solid ${colors.blue[100]}` 
            } }>

            <Grid2 size={ { xs: 12, sm: 6, md: 3 } } >
              <Button
                variant="contained"
                color="secondary"
                sx={ { bgcolor: "salmon " } }
                fullWidth
                onClick={ () => setToggleDialog(true) }
              >Create New Post</Button>
            </Grid2>

            <Grid2 size={ { xs: 12, sm: 6, md: 9 } } sx={ { display: "flex", flexDirection: "column", height: "100%" } } >
              <PostList posts={ posts } />
            </Grid2>

          </Grid2>
        </Container>
        <FormDialog
          onClose={ () => setToggleDialog(false) }
          open={ toggleDialog }
          formik={ formik }
        />
      </Box >
    </>
  );

};

export default PageHomeStatic;