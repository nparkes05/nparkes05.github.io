$(document).ready(function(){
    //var imgtest = $("<img>",{src: "faculty/Dr.Basu.png"});
    //$("#faculty").append(imgtest);
    $.getJSON("facultyList.json", function(data) {
        $.each(data, function(){
            $.each(this, function(key, value) {
                var h2 = $("<h2></h2>").text(value.full_name);
                var img = $("<img>",{src: value.image});
                var h3 = $("<h3></h3>").text(value.department);
                var p = $("<p></p>").text(value.bio);
                $("#faculty").append(img, h2, h3, p);
            });
        });
    });
});
