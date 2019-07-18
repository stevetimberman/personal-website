import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import Box from '@material-ui/core/Box';

class ReceiptSpecs extends Component {


	render() {
		var { state } = this.props;
		return (
			<Box display='flex' flexDirection='column'>
				<Box p={1}>
				<Typography variant="h6"><Box fontFamily="Monospace" fontSize="h6.fontSize" fontWeight="fontWeightBold">Check Information</Box></Typography>
				</Box>
				<Box display='flex' flexDirection='row' justifyContent='center' p={1}>
				<Box p={1}>
				<TextField
					name="subtotal"
					type="number"
					placeholder="0"
					onChange={(e) => this.props.updateHandler(e.target.name, e.target.value)}
					label="Subtotal"
					value={state.subtotal}
					variant="outlined"
					InputProps={{
			            startAdornment: <InputAdornment position="start">$</InputAdornment>,
			          }}
				/>
				</Box>
				<Box p={1}>
				<TextField
					name='total'
					type="number"
					placeholder="0"
					onChange={(e) => this.props.updateHandler(e.target.name, e.target.value)}
					label="Total"
					value={state.total}
					variant="outlined"
					InputProps={{
			            startAdornment: <InputAdornment position="start">$</InputAdornment>,
			          }}
				/>
				</Box>
				<Box p={1}>
				<TextField
					name='tip'
					type="number"
					label="Tip Percent (%)"
					onChange={(e) => this.props.updateHandler(e.target.name, e.target.value)}
					value={state.tip}
					variant="outlined"
				/>
				</Box>
				</Box>
			</Box>
		)
	}
}

export default ReceiptSpecs;
