import React, { Component } from 'react';
import '../App.css';

import NameHeader from './NameHeader'
import mainImg from '../static/images/watermark.jpeg'
import FontFamily from './FontFamily'
import Box from '@material-ui/core/Box';
import ResumeImageDialog from './ResumeImageDialog'
import SplitButton from './SplitButton'


class Home extends Component{

  render () {

    return (

        <div className="Home" style={{backgroundImage: `url(${mainImg})` }}>
          <Box display="flex" flexDirection="column" padding={5}>
            <Box>
              <NameHeader />
            </Box>
            <Box justifyContent='center'>
              <ResumeImageDialog />
            </Box>
          </Box>
        </div>

    );
  }
}

export default Home;
