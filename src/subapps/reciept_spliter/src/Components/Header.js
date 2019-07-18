import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';



class Header extends Component {

  render(){
    return (
    <Box className="ReceiptHeader" boxShadow={3}>

         <AppBar position="static" color="default">
            <Toolbar>


                    <Typography color="inherit">
                      <Box fontFamily="Monospace" fontSize="h4.fontSize">
                        Receipt Splitter
                      </Box>
                    </Typography>

                    <Box display='flex' flexDirection='flex-start' ml={11}>
                    <Button >
                      <Box direcfontFamily="Monospace" >
                        Return Home
                      </Box>
                    </Button>
                    </Box>


                    </Toolbar>


        </AppBar>

    </Box>
    )
  }


}

export default Header;
