import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import steven_timberman_image from '../static/images/steven_timberman_image.jpg'


const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 90,
    height: 90,
  }
});

export default function AvitarSteve() {
  const classes = useStyles();

  return (
    <div>
      <Avatar alt="Steve" src={steven_timberman_image} className={classes.bigAvatar} />
    </div>
  );
}
