import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ReceiptSpecs from './ReceiptSpecs'
import InputItem from './InputItem'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


class Inputs extends Component {



	render(){
		var { state, updateHandler, itemAddHandler } = this.props;

		return (
					<div>
						<Box p={5}>
				          <Paper>
				          	<form>
				          		<ReceiptSpecs updateHandler={updateHandler} state={state}/>
				          	</form>
				          </Paper>
				          </Box>
				          <Box p={5}>
				          <Paper>
				          	<InputItem itemAddHandler={itemAddHandler} state={state}/>
				          </Paper>
				          </Box>
				         </div>

		)
	}
}

export default Inputs;
