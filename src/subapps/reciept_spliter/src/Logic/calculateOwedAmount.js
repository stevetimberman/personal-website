import calculateTaxTip from "./calculateTaxTip"

export default function calculateOwedAmount (subtotal, total, tip, amount) {

	var taxPercent = ((total - subtotal) / subtotal)*100

	var owedAmount = (Number(amount) + calculateTaxTip(taxPercent, amount) + calculateTaxTip(tip, amount) + 0.0)
	console.log(owedAmount)



	return (owedAmount).toFixed(2)

}