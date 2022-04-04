$(document).ready(function(){
    const jpegImage = [
        "../images/angryDog.jpeg",
        "../images/cat.jpeg",
        "../images/maddyBlanket.jpeg",
        "../images/riley.jpeg",
        "../images/woodyAndMaddy.jpeg",
        "../images/youngRiley.jpeg"
    ]
    let count = 0;
    var image = new Image();
    image.src = jpegImage[count];
    $("img").click(function(evt) {
        count++;
        image.src = jpegImage[count];
    })
})