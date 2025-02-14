import { Box, AppBar, Typography, List, ListItemButton, Container } from "@mui/material";
const Home = () => {

  return (
    <Box sx={ { display: "flex", flexDirection: "column", flexGrow: 1 } }>
      <Container sx={ { border: "1px solid red", height: "100%" } }>
        <Typography variant="h4">Home Page</Typography>
      </Container>
    </Box>
  );
};

export default Home;