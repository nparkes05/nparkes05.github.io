$(document).ready(function(){
    const jpegImage = [
        "images/angryDog.jpeg",
        "images/cat.jpeg",
        "images/maddyBlanket.jpeg",
        "images/riley.jpeg",
        "images/woodyAndMaddy.jpeg",
        "images/youngRiley.jpeg"
    ]
    let count = 0;
    document.getElementById("imageSlide").src = jpegImage[count];
    $("img").click(function(evt) {
        count++;
        document.getElementById("imageSlide")= jpegImage[count];
    })
})