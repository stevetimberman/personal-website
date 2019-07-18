
export default function removeItem (items, index) {
	items.splice(index)
	return ({items: items})
}