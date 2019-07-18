import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { typography } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';


class InputItem extends Component {

	constructor(props){
	    super(props);
	    this.state = {
	      price: null,
	    };
	    this.handleUpdate  = this.handleChange.bind(this);
	    this.setState  = this.setState.bind(this);
	  }

	handleChange(val) {
		this.setState({price: val});
	}

	render() {
		let { state, itemAddHandler } = this.props;
		const buttonStyle = {
			margin: '19px'
		};

		return (
			<Box display='flex' flexDirection='column' justifyContent='center'>
				<Box p={1}>
				<Typography ><Box fontFamily="Monospace" fontSize="h6.fontSize" fontWeight="fontWeightBold">Individual Item Information</Box></Typography>
				</Box>
				<Box display='flex' flexDirection='row' justifyContent='center' p={2}>
					<form >
						<Box >
						<TextField
							name='item'
							type="number"

							value={this.state.price}
							onChange={(e) => this.handleChange(e.target.value)}
							placeholder={0}
							label="Item Listed Price"
							variant="outlined"
							InputProps={{
					            startAdornment: <InputAdornment position="start">$</InputAdornment>,
					          }}
						/>
						</Box>
						<Box>
						<Button color="default" style={buttonStyle} onClick={(e) => itemAddHandler(state.items, state.itemsTotal, this.state.price)}>
							Add Item
						</Button>
						</Box>
					</form>
				</Box>
			</Box>
			)
	}

}

export default InputItem;
