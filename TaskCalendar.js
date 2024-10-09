function everyDayTask(){
    let Day = prompt('Enter a Day of the Week: ');
    switch (Day){
        case "Monday":
            alert("Your task for Monday is : Complete Your Assignments");
            break;
        case "Tuesday":
            alert("Your Task for Tuesday is : Pass Your Assignment");
            break
        case "Wednesday":
            alert("Your Task for Wednesday is: Do Some exercise");
            break;
        case "Thursday":
            alert("Your Task for Thursday is: Join Goggle meetings");
            break;
        case "Friday":
            alert("Your Task for Friday is: Training");
            break;
        case "Saturday":
            alert("Your Task for Saturday is: Wash your Clothes");
            break;
        case "Sunday":
            alert("Your task for Sunday is: Go to Church");
            break;
        default:
            alert("Enter only a Day of a Week.");
                                     
    }
}
