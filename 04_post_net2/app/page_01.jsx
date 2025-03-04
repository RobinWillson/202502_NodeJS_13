"use client";
import { Box, AppBar, Typography, List, ListItemButton, Container, Grid2, Button, colors, Paper, Dialog, TextField } from "@mui/material";
import PostList from "./components/PostList";
import { useEffect, useState } from "react";
import FormDialog from "./components/FormDialog";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  body: yup.string().required("Body is required")
});
// const POST = [
//   {
//     id: 1, title: "Title 1",
//     body: "Content 1",
//     createAt: "2021-10-01"
//   },
//   {
//     id: 2, title: "Title 2",
//     body: "Content 2",
//     createAt: "2021-10-01"
//   },
//   {
//     id: 3, title: "Title 3",
//     body: "Content 3",
//     createAt: "2021-10-01"
//   },
//   {
//     id: 4, title: "Title 4",
//     body: "Content 4",
//     createAt: "2021-10-01"
//   },
//   {
//     id: 5, title: "Title 5",
//     body: "Content 5",
//     createAt: "2021-10-01"
//   },
//   {
//     id: 6, title: "Title 6",
//     body: "Content 6",
//     createAt: "2021-10-01"
//   },
//   {
//     id: 7, title: "Title 7",
//     body: "Content 7",
//     createAt: "2021-10-01"
//   },
// ];

/**  
 * Here shows a traditional react way to fetch data
*/
// useEffect(() => {
//   (async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     setPosts(data);
//   })();
// })


async function getServerSideProps() {
  const posts = [
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
  return {
    props: {
      posts: posts
    }
  };
}

/**
 * Main Page return
 */
const Home = async () => {
  const props = await getServerSideProps();
  const posts = props.posts;
  console.log(posts);
  // when we say {props} here, we are actually destructuring the props object
  // 在下面我們可以直接使用 posts 作為參數
  // 如果我們這裡不使用大括號, 我們下面就需要使用 props.posts
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
  );
};

export default Home;