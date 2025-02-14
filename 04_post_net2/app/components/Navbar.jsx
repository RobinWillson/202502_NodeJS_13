import React from 'react';
import { Box, AppBar, Typography, List, ListItemButton, Toolbar } from "@mui/material";
import Link from "next/link";
import theme from '@/theme/theme';

const MENU_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
];
const Navbar = () => {

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={ { justifyContent: 'space-between' } }>
        <Typography variant="h4">POST.NET</Typography>
        <List sx={ { display: 'flex' } }>
          {
            MENU_ITEMS.map((item) => (
              <Link key={ item.label } href={ item.path }>
                <ListItemButton>
                  { item.label }
                </ListItemButton>
              </Link>
            ))
          }
        </List>
      </Toolbar>
      {/* </Box> */ }
    </AppBar>
  );
};

export default Navbar;