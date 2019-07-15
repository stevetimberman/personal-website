import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';
import AvitarSteve from './AvitarSteve'

export default function NameHeader() {
  return (
    <Box display="flex" flexDirection="row" alignItems="center">

      <Box component={AvitarSteve} inline justifyContent="center" />
      <Box display="flex" flexDirection="column">
        <Box fontFamily="Monospace" fontSize="h5.fontSize" color="white">
          Steven Timberman
        </Box>
        <Box fontFamily="Monospace" fontSize="h6.fontSize" color="white">
          Massachusetts Institute of Technology
        </Box>
        <Box fontFamily="Monospace" fontSize="h6.fontSize" color="white">
          Software Engineer
        </Box>
      </Box>
    </Box>
  );
}
