export default function calculateTaxTip(percent, amount) {
    if (amount){
        return (amount*percent/100)
    }else {
        return (0)
    }

}
