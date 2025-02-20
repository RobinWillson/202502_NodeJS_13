import React from 'react';
import { Box, AppBar, Typography, List, ListItemButton, Toolbar } from "@mui/material";
import Link from "next/link";

const MENU_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
];
const Navbar = () => {

  return (
    <AppBar position="sticky" color="salmon">
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
    </AppBar>

  );
};

export default Navbar;