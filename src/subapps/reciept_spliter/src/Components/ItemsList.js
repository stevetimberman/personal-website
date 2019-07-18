import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


class ItemsList extends Component {

	render() {
		var { items } = this.props;
		
		console.log(items)
		if (items.length > 0) {
			console.log("HERREE");

			var itemsList = items.map(function(item, key){
				console.log(item)
					return (<li key={key}>Item {key + 1} has a price of ${Number(item).toFixed(2)}</li>)
			}

			)
			return (<ul>{itemsList}</ul>)
		}
		else {
			console.log("There")
			return (<div>There are no items yet!</div>)
		}

	}
		

}

export default ItemsList;