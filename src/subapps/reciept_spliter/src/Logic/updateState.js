

export default function updateStateObj(sect, newVal) {

	if (sect === "subtotal") {
	
		return {subtotal: newVal}

	}

	else if (sect === "total") {
		return {total: newVal}
	}

	else {
		return {tip: newVal}
	}

}