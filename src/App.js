import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import NameHeader from './components/NameHeader'
import mainImg from './static/images/watermark.jpeg'
import FontFamily from './components/FontFamily'
import Box from '@material-ui/core/Box';
import ResumeImageDialog from './components/ResumeImageDialog'
import SplitButton from './components/SplitButton'


class App extends Component{

  render () {

    return (
      <Router>
        <div className="App" style={{backgroundImage: `url(${mainImg})` }}>
          <Box display="flex" flexDirection="column" padding={5}>
            <Box>
            <NameHeader />
            </Box>
            <Box>
              <ResumeImageDialog />
            </Box>
            <Box>
              <FontFamily />
            </Box>
          </Box>
        </div>
      </Router>
    );
  }
}

export default App;
