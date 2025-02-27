import { Box, Typography } from '@mui/material';
import React from 'react';

const page = () => {
  return (
    <Box>
      <Typography variant="h6">Here shows Typography Variant :</Typography>
      <Typography variant='body1'>body1</Typography>
      <Typography variant='button'>button</Typography>
      <Typography variant='body2'>body2</Typography>
      <Typography variant='caption'>caption</Typography>
      <Typography variant='subtitle1'>subtitle1</Typography>
      <Typography variant='overline'>overline</Typography>
      <Typography variant='subtitle2'>subtitle2</Typography>
      <Typography variant='string'>string</Typography>
    </Box>


  );
};

export default page;