$(document).ready(function() {

        // preload the image for each link
        $("#image_list a").each(function () {
                let image = new Image;
                image.src = $(this).attr('href');
        })

        // set up the event handlers for each link
        $("#image_list a").click(function (event){
                // get the image URL and caption for each image and animate the caption
                console.log("test");
                $("#image").attr("src", $(this).attr('href'));
                $("#caption").html($(this).attr("title"));

            // cancel the default action of each link
            event.preventDefault();
            
        })

    // move the focus to the first link

}); // end ready