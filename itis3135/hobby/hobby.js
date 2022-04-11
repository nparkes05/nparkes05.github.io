$(document).ready(function() {
    $('#homeHeading').click(function(){
        if ($('#home').is(':visible'))
            $('#home').slideUp("slow");
        else
            $('#home').slideDown("slow");
    });
    $('#aboutMeHeading').click(function(){
        if ($('#aboutMe').is(':visible'))
            $('#aboutMe').slideUp("slow");
        else
            $('#aboutMe').slideDown("slow");
    });
    $('#bestTimesHeading').click(function(){
        if ($('#bestTimes').is(':visible'))
            $('#bestTimes').slideUp("slow");
        else
            $('#bestTimes').slideDown("slow");
    });
    $('#whereHeading').click(function(){
        if ($('#where').is(':visible'))
            $('#where').slideUp("slow");
        else
            $('#where').slideDown("slow");
    });
    $('#howHeading').click(function(){
        if ($('#how').is(':visible'))
            $('#how').slideUp("slow");
        else
            $('#how').slideDown("slow");
    });
    $('#whyHeading').click(function(){
        if ($('#why').is(':visible'))
            $('#why').slideUp("slow");
        else
            $('#why').slideDown("slow");
    });
});