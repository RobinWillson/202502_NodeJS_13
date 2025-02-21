"use client";
import { Box, AppBar, Typography, List, ListItemButton, Container, Grid2, Button, colors, Paper } from "@mui/material";
import styles from "./page.module.css";

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
      <Container maxWidth="md" sx={ { m: 0, py: 2, border: "1px solid, red" } }   >
        <Grid2 container spacing={ 2 } sx={ { height: "100%", border: `2px solid ${colors.blue[100]}` } }>
          <Grid2 size={ { xs: 12, sm: 6, md: 3 } } >
            <Button
              variant="contained"
              color="secondary"
              sx={ { bgcolor: "salmon " } }
              fullWidth
            >Create New Post</Button>
          </Grid2>

          <Grid2 size={ { xs: 12, sm: 6, md: 9 } } sx={ { display: "flex", flexDirection: "column", height: "100%" } } >
            <Paper sx={ { flexGrow: 1, overflow: "auto", p: 1 } }>
              { POST.length === 0 && <Typography variant="h6">No Post</Typography> }
              { POST.map((post) => (
                <Box key={ post.id } sx={ {
                  p: 2,
                  mb: 1,
                  borderBottom: `1px solid ${colors.grey[300]}`
                } }>
                  <Typography variant="h6" gutterBottom>{ post.title }</Typography>
                  <Typography variant="body1" gutterBottom>{ post.body }</Typography>
                  <Typography variant="body2" gutterBottom>{ post.createAt }</Typography>
                  <Button variant="contained" color="primary" size="small" sx={ { mr: 2 } }>Edit</Button>
                  <Button variant="contained" color="secondary" size="small">Delete</Button>

                </Box>
              )) }
            </Paper>
          </Grid2>

        </Grid2>
      </Container>
    </Box >
  );
};

export default Home;