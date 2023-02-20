import { Box, Drawer, IconButton, List } from "@mui/material";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Container } from "./styles";


export default function DrawerT() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={() => setIsOpen(true)}>
      <GiHamburgerMenu size={30} color="#FFF" />
      </IconButton>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Box

      width="80vw"
      role="presentation"
      onClick={() => {}}
    >
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary='tete' />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
      </Drawer>
    </Container>
  );
}
