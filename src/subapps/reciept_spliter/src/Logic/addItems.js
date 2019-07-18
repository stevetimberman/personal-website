
export default function addItems(items, itemsTotal, price){

	if (price) {
		items.push(price);
		var newTotal = Number(itemsTotal) + Number(price);
		console.log("Here")
		console.log(items);
		console.log(itemsTotal);
		console.log(newTotal);
		return (
			{
				items: items, 
				itemsTotal: newTotal,
			}
		)
	}

}