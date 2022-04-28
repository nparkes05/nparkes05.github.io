$(document).ready(function() {
	$("#nav_list a").click(function() {
        let pathString = $(this).attr("title");
        pathString = "json_files/" + pathString + ".json";
        $.getJSON(pathString, function(data) {
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("main h1").html(value.title);
                    $("main h2").html(value.month);
                    $("main h3").html(value.speaker);
                    $("main img").attr("src", value.image);
                    $("main p").html(value.text);
                })
            })
        })
    })
}); // end ready