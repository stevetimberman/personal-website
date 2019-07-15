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





export default function ResumeImageDialog() {
  const options = ['Resume', 'Steve yes'];

  const [open, setOpen] = React.useState("None");
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

  function handleClose() {
    setOpen('None');
  }

  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setOpen('None');
  }

  return (
    <div>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="Split button">
          <Button >Apps </Button>
          <Button onClick={handleClickOpen(options[selectedIndex])}>{options[selectedIndex]}</Button>
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
                        disabled={index === 2}
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
        open={true ? open=='Resume' : false}
        onClose={handleClose}
        scroll={scroll}
        maxWidth={maxWidth}
        aria-labelledby="steves-resume"
        fullScreen={fullScreen}
      >
        <DialogTitle id="steves-resume">Steven's Resume</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText>
            <img src={resume}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
