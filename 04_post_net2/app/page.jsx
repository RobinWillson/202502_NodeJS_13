// "use client";
import { Box, AppBar, Typography, List, ListItemButton, Container, Grid2, Button, colors, Paper, Dialog, TextField } from "@mui/material";
import testConnection from './test-mongodb-connection';
import PageHomeStatic from './pageHomeStatic';

async function getServerSidePosts() {
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
  console.log(Date.now().toLocaleString());
  let connection = await testConnection();
  console.log("connection to MongoDB Atlas :", connection);
  const { svrPosts } = await getServerSidePosts();
  // console.log(svrPosts);
  // * I think we need to build a 404 page for connection error
  // const posts = props.posts;

  //-----------------------------------------
  return (
    <>
      <PageHomeStatic posts={ svrPosts } />
    </>


  );
};

export default Home;