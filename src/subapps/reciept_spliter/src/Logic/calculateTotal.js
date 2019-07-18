import calculateTaxTip from "./calculateTaxTip"

export default function calculateTotal(subtotal, taxPercent, tipPercent){
	var total = Number(subtotal) + Number(calculateTaxTip(taxPercent, subtotal)) + Number(calculateTaxTip(tipPercent, subtotal));
	return total.toFixed(2) 
}