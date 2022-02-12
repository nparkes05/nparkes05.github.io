function scriptTest(){
    alert("Hey my script is running");
}

window.onload = function(){
    const dateRef = new Date();
    var day = dateRef.toDateString();
    console.log(day);
    let time = (dateRef.getHours()).toString() + ":" + (dateRef.getMinutes()).toString();
    var output = "Today is " + time + " on " + day;
    document.getElementById("time").innerHTML = output;
}

function sumbitFunction(){
    var values = document.getElementById("form1");
    var name = values.elements[0].value;
    var feeling = values.elements[1].value;
    var output = "The Parkes Development co. welcomes you, " + name + "! We're glad you are doing " + feeling + "!";
    document.getElementById("output").innerHTML = output;
}

function chickenFunction(){
    var why = "To bock traffic";
    document.getElementById("chicken").innerHTML = why;
}

function tipFunction(){
    var value = document.getElementById("tipForm");
    var cost = parseInt(value.elements[0].value);
    var tip = [cost * .20, cost * .15, cost * .10];
    document.getElementById("tipOutput").innerHTML = "20%: $" + tip[0] + "\n15%: $" + tip[1] + "\n10%: $" + tip[2];
}

function averageFunction(){
    var i = 0;
    var sum = 0;
    for(i; i < 3; i++){
        sum += parseInt(prompt("Enter a number"));
    }
    var average = sum / 3.0;
    alert("The average of your three numbers: " + average);
}

function sumFunction(){
    var i = 0;
    var sum = 0;
    for(i; i < 3; i++){
        sum += parseInt(prompt("Enter a number"));
    }
    alert("The average of your three numbers: " + sum);
}

function randFunction(){
    var value = document.getElementById("guess").value;
    value = parseInt(value);
    var random = Math.floor(Math.random() * (9 - 1) + 1);
    if (random == value){
        document.getElementById("guessOutput").innerHTML = "Correct! The number was: " + random;
    }
    else{
        document.getElementById("guessOutput").innerHTML = "Incorrect! The number was: " + random;
    }
}