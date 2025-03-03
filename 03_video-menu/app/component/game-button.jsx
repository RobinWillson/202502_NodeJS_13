'use client';
import { Button, styled } from '@mui/material';
import React from 'react';
import { Colors } from '../theme/colors';

const GameButton = styled(Button, {
  name: 'GameButtonComponent',
  slot: 'Root'
})(({ }) => ({
  color: Colors.white
}));
function MenuButton({ title, onButtonClick }) {
  return (
    <GameButton onClick={ () => onButtonClick(title) }>{ title }</GameButton>
  );
}

export default MenuButton;