function scriptTest(){
    alert("Hey my script is running");
}

window.onload = function(){
    const dateRef = new Date();
    var time = dateRef.getTime();
    
}

function sumbitFunction(){
    var values = document.getElementById("form1");
    var name = values.elements[0].value;
    var feeling = values.elements[1].value;
    var output = "The Parkes Development co. welcomes you, " + name + "! We're glad you are doing " + feeling + "!";
    document.getElementById("output").innerHTML = output;
}