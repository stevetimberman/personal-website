import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import resume from '../static/images/StevenTimbermanResume.png'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import { Redirect } from 'react-router';

import Libraries from './Libraries'

export default function ResumeImageDialog() {
  const options = ['Choose an App', 'Receipt Splitter'];

  const [open, setOpen] = React.useState("None");
  const [redirect, setRedirect] = React.useState(false)
  const [redirecturl, setRedirecturl] = React.useState('None')
  const [scroll, setScroll] = React.useState('paper');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [maxWidth, setMaxWidth] = React.useState('md');

  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClickOpen = openType => () => {
    setOpen(openType);
    setScroll('paper');
  };

  const handleClickRedirect = redirectApp => () => {
    var curRedirectUrl = ''
    if (redirectApp == 'Choose an App'){
      return
    }
    if (redirectApp == 'Receipt Splitter'){
      curRedirectUrl = '/receipt'
    }
    setRedirecturl(curRedirectUrl)
    setRedirect(true);
  };

  function handleClose() {
    setOpen('None');
  }

  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setOpen('None');
  }

  if (redirect){
    if (redirecturl[0] != "/"){
      window.open(redirecturl)
    }else{return <Redirect push to={redirecturl} />}
  }

  var dialogContent;
  if (open=='Resume'){
    dialogContent = <img src={resume}/>
  }else if (open=='Libraries'){
    dialogContent = <Libraries/>
  }

  return (
    <Box >
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="Split button">
          <Button onClick={handleClickOpen('Resume')}>Resume </Button>
          <Button onClick={handleClickOpen('Libraries')}>Libraries </Button>
          <Button onClick={handleClickRedirect(options[selectedIndex])}>{options[selectedIndex]}</Button>
          <Button
            color="primary"
            variant="contained"
            size="small"
            aria-owns='menu-list-grow'
            aria-haspopup="true"
            onClick={handleClickOpen('Popper')}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>

      <Popper open={true ? open==='Popper' : false} anchorEl={anchorRef.current} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}

                        selected={index === selectedIndex}
                        onClick={event => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

      <Dialog
        open={true ? (open=='Resume' || open=='Libraries') : false}
        onClose={handleClose}
        scroll={scroll}
        maxWidth={maxWidth}
        aria-labelledby="steves-resume"
        fullScreen={fullScreen}
      >
        <DialogTitle id="steves-resume">Steven's {open}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText>
            {dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
