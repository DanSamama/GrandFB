
// Get rid of the left column
$(document).ready(function () {


 $("img").each(function(){
        var currentImg = $(this);
        var btn = $("<button>").text("+").click(function(e){
            e.stopPropagation();
            $(this).prev("img").width($(this).prev("img").width() + 100);
        });

        currentImg.parent().append(btn)
    });
    var element = document.querySelector('#leftCol');
element.parentElement.removeChild(element);

});


var element = document.querySelector('#leftCol');
element.parentElement.removeChild(element);


// Setting the newsfeed to stretch on all the page
var globalContainer = $("#globalContainer").width("100%");
var content = $("#content").width("100%");
var mainContainer = $("#mainContainer").width("100%");
var contentArea = $("#contentArea").width("100%");


