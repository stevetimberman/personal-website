import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Box from '@material-ui/core/Box';
import Home from './components/Home'
import ReceiptApp from './subapps/reciept_spliter/src/Components/App'



class App extends Component{

  render () {

    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/receipt" exact component={ReceiptApp} />
      </Router>
    );
  }
}

export default App;
