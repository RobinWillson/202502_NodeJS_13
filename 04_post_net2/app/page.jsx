"use client";
import { Box, AppBar, Typography, List, ListItemButton, Container, Grid2, Button, colors, Paper, Dialog, TextField } from "@mui/material";
import PostList from "./components/PostList";
import { useState } from "react";
import FormDialog from "./components/FormDialog";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  body: yup.string().required("Body is required")
});
const POST = [
  {
    id: 1, title: "Title 1",
    body: "Content 1",
    createAt: "2021-10-01"
  },
  {
    id: 2, title: "Title 2",
    body: "Content 2",
    createAt: "2021-10-01"
  },
  {
    id: 3, title: "Title 3",
    body: "Content 3",
    createAt: "2021-10-01"
  },
  {
    id: 4, title: "Title 4",
    body: "Content 4",
    createAt: "2021-10-01"
  },
  {
    id: 5, title: "Title 5",
    body: "Content 5",
    createAt: "2021-10-01"
  },
  {
    id: 6, title: "Title 6",
    body: "Content 6",
    createAt: "2021-10-01"
  },
  {
    id: 7, title: "Title 7",
    body: "Content 7",
    createAt: "2021-10-01"
  },
];


const Home = () => {
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
  //-----------------------------------------
  return (
    <Box sx={ (theme) => ({
      backgroundColor: theme.palette.grey[200],
      // height: "100%",
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
            <PostList posts={ POST } />
          </Grid2>

        </Grid2>
      </Container>
      <FormDialog
        onClose={ () => setToggleDialog(false) }
        open={ toggleDialog }
        formik={ formik }
      />

    </Box >
  );
};

export default Home;