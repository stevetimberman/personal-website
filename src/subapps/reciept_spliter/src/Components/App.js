import React, { Component } from 'react';
import Header from './Header'
import Inputs from './Input'
import updateStateObj from '../Logic/updateState'
import Grid from '@material-ui/core/Grid';
import OwedAmount from './OwedAmount'
import addItems from '../Logic/addItems'
import ItemsList from './ItemsList'
import TableObject from "./TableObject"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';






class ReceiptApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      subtotal: null,
      total: null,
      tip: 20,
      items: [],
      itemsTotal:0
    };
    this.handleUpdate  = this.handleUpdate.bind(this);
    this.handleItemAdd = this.handleItemAdd.bind(this);
    this.setState = this.setState.bind(this);
  }

  handleUpdate (section, value) {

    this.setState(updateStateObj(section, value));

  }

  handleItemAdd (items, itemsTotal, price) {

    this.setState(addItems(items, itemsTotal, price))

  }



  render() {
    return (
      <div className="ReceiptApp" >
        <Box boxShadow={3} bgcolor="background.paper"><Header/></Box>
        <Box display="flex" flexDirection="column" padding={5}>

          <Box><Inputs updateHandler={this.handleUpdate} itemAddHandler={this.handleItemAdd} state={this.state}/></Box>
          <Box><TableObject state={this.state}/></Box>

        </ Box>
      </div>
    );
  }
}

export default ReceiptApp;
