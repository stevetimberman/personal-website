import React, { Component } from 'react';
import calculateOwedAmount from '../Logic/calculateOwedAmount'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


class OwedAmount extends Component {

	render () {
		const { state } = this.props;



		if (state.subtotal && state.total && state.tip && state.items.length > 0) {
			var total = 0
			state.items.map((item) => (total += Number(item)))
			var owed = calculateOwedAmount(state.subtotal, state.total, state.tip, total);
			return (<Grid item xs={2}><Paper>You owe ${owed}</Paper></Grid>)
		}else {
			return <Grid item xs={4}><Paper>Please enter information about your check!</Paper></Grid>
		}
	}

}

export default OwedAmount;