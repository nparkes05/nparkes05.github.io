$(document).ready(function() {
    /*
    $.ajax({
        type: "get",
        url: "team.xml",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "xml",
        success: function(data) {
            $("#team").html("");
            $(data).find("management").children().each(function() {
                var xmlDoc = $(this);
                $("#team").append
                ("<h3>" + xmlDoc.find("name").text() + "</h3>" +
                          xmlDoc.find("title").text() + "<br>" +
                          xmlDoc.find("bio").text() + "<br>");
            });
        }
    });
    */
    $.getJSON("team.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#team").append(
                    "Name: " + value.name + "<br>" +
                    "Title: " + value.title + "<br>" +
                    "Bio: " + value.bio + "<br><br>"
                );
            });
        });
    });
});