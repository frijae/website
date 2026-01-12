$('body').append('<div style="" id="loadingDiv"><div class="se-pre-con"></div></div>');
$(window).on('load', function () {
    setTimeout(removeLoader, 100); //wait for page load PLUS two seconds.
});


function removeLoader() {
   $("#loadingDiv").fadeOut(200, function ()  {
        // fadeOut complete. Remove the loading div 
        $("#loadingDiv").remove(); //makes page more lightweight 
    });
}


$(window).load(function () {
    $('#loading').hide();
});
