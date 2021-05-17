const netIncome = (salary) => {
    if (salary <= 10000) {
        console.log("No tax payable!")
    } else if (salary >= 10001 && salary <= 37500) {
        return ((salary - 10000)* 0.8) + 10000;
    } else if (salary >= 37501 && salary <= 150000) {
        return (salary - (((salary - 37501)* 0.4) + 5500));
    } else if (salary >= 150001) {
        return (salary - (((salary - 150001)* 0.45) + 50500));
    } else {
        console.log("Invalid number!")
    }
};

console.log(netIncome(170000))