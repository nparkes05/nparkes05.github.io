window.onload = function(){
    //Gets user input
    var userInput = prompt("Enter a number of sides");
    //calls validation to validate number of sides
    var valid = validation(userInput);
    if(valid){ //if valid shape
        var shape = numberSides(userInput);
        alert("Number of sides: " + userInput + "\nYour shape: " + shape);
    }
    else //if invalid shape
        alert("Invalid shape");
}

//gets user input and returns a string of the shape
function numberSides(userInput){
    if(userInput == 3) //if it has three sides
        return "Triangle";
    else if(userInput == 4) //if it has four sides
        return "square";
    else if(userInput == 5) //if it has five sides
        return "Pentagon";
    else if(userInput == 6) //if it has six sides
        return "Hexagon";
    else if(userInput == 7) //if it has seven sides
        return "Heptagon"

    return "Something went wrong"
}

//validates to make sure a proper number was entered
function validation(userInput){
     //if userinput is greater than or equal to 3 and less than or equal to 7
    if((userInput >= 3) && (userInput <= 7))
        return true;
    else
        return false;
}