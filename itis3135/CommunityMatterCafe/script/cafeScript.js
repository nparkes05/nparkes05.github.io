$(document).ready(function(){
    $(".foodOption").chosen();
    $("#datepicker").datepicker();
    $("#submit").click(function(){
        var email = $("#email").val();
        var name = $("#name").val();
        var phone = $("#phone").val();
        var date = $("#datepicker").val();
        var food = $(".foodOption :selected").text();
        alert(food + date);
    })
})