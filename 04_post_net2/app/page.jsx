"use client";
import { Box, AppBar, Typography, List, ListItemButton, Container, Grid2, Button, colors, Paper } from "@mui/material";
import styles from "./page.module.css";

const Home = () => {

  return (

    <Box sx={ (theme) => ({ backgroundColor: theme.palette.grey[200] }) }
      className={ styles.contain0 }
    >
      <Container maxWidth="md" sx={ { py: 2 } } className={ styles.contain1 }  >
        <Grid2 container spacing={ 2 }>

          <Grid2 size={ { xs: 12, sm: 6, md: 3 } }>
            <Button
              variant="contained"
              color="secondary"
              sx={ { bgcolor: "salmon " } }
              fullWidth
            >Create New Post</Button>
          </Grid2>

          <Grid2 size={ { xs: 12, sm: 6, md: 9 } }>
            <Paper sx={ { width: "100%", height: "100px" } }>

            </Paper>
          </Grid2>

        </Grid2>
      </Container>
    </Box >
  );
};

export default Home;