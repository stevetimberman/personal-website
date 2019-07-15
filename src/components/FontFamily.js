import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';

export default function FontFamily() {
  return (
    <Typography component="div">
      <Box fontFamily="Monospace" fontSize="h6.fontSize" >
        Born and raised in New York.
      </Box>
    </Typography>
  );
}
