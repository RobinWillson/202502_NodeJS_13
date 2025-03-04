// "use client";
import { Box, AppBar, Typography, List, ListItemButton, Container, Grid2, Button, colors, Paper, Dialog, TextField } from "@mui/material";
import PostList from "./components/PostList";
// import { useEffect, useState } from "react";
import FormDialog from "./components/FormDialog";
import { useFormik } from "formik";
import * as yup from "yup";
import testConnection from './test-mongodb-connection';


async function getServerSideProps() {
  try {
    const res = await fetch('http://localhost:3000/api/Posts', {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    console.log("Error fetching posts", error);
  }
}

/**
 * Main Page return
 */
const Home = async () => {
  let connection = await testConnection();
  console.log(connection);
  const res = await getServerSideProps();
  console.log(res);
  // ticket.title, ticket.description, ticket.category, ticket.priority, ticket.progress, ticket.status, ticket.active
  // const posts = props.posts;
  // console.log(posts);
  // when we say {props} here, we are actually destructuring the props object
  // 在下面我們可以直接使用 posts 作為參數
  // 如果我們這裡不使用大括號, 我們下面就需要使用 props.posts
  // const [toggleDialog, setToggleDialog] = useState(false);
  // const formik = useFormik({
  //   initialValues: {
  //     title: "",
  //     body: "",
  //     createAt: new Date().toISOString()
  //   },
  //   validationSchema,
  //   onSubmit: (values) => {
  //     console.log(values);
  //   }
  // });
  //-----------------------------------------
  return (
    <>posts</>
    // <Box sx={ (theme) => ({
    //   backgroundColor: theme.palette.grey[200],
    //   // height: "100%",
    //   width: "100%",
    //   display: "flex",
    //   justifyContent: "center",
    //   overflow: "hidden"
    // }) }

    // >
    //   <Container maxWidth="md"
    //     sx={ {
    //       m: 0, py: 2,
    //       // border: "1px solid, red" 
    //     } }   >
    //     <Grid2 container spacing={ 2 }
    //       sx={ {
    //         height: "100%",
    //         // border: `2px solid ${colors.blue[100]}` 
    //       } }>

    //       <Grid2 size={ { xs: 12, sm: 6, md: 3 } } >
    //         <Button
    //           variant="contained"
    //           color="secondary"
    //           sx={ { bgcolor: "salmon " } }
    //           fullWidth
    //           onClick={ () => setToggleDialog(true) }
    //         >Create New Post</Button>
    //       </Grid2>

    //       <Grid2 size={ { xs: 12, sm: 6, md: 9 } } sx={ { display: "flex", flexDirection: "column", height: "100%" } } >
    //         <PostList posts={ posts } />
    //       </Grid2>

    //     </Grid2>
    //   </Container>
    //   <FormDialog
    //     onClose={ () => setToggleDialog(false) }
    //     open={ toggleDialog }
    //     formik={ formik }
    //   />

    // </Box >
  );
};

export default Home;