const dayOfTheWeek = day => {   //function (dayOfTheWeek) is to choose the variable argument (day)
    switch (day) {              //switches the console message based on the case input into the function
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working from home");
            break;              //all code up to the break will share the same code block, all outputing "Working from home"
        case "Saturday":
        case "Sunday":
            console.log("Relaxing");
            break
        default:
            console.log("No day of the week entered!");
    }
}
dayOfTheWeek("Saturday");