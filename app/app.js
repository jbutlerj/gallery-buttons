// function import
import { changeRoute } from "../model/model.js";

// declare variables
var button = ".browse .button";

// listener for clicks
function initListeners() {
    $(".bars").click(function(e){
        $('.bars').toggleClass("active");
        $('.links').toggleClass("active");
    });

    if ($(window).width() <= 960) {
        $(".links a").click(function(e){
            $('.bars').toggleClass("active");
            $('.links').toggleClass("active");
        });
    };
    
    // takes hash from active anchor
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

// function to listen for button clicks on browse
$(document).on("click", button, function(e) {
    let btnID = e.currentTarget.id;
    console.log(btnID);
})

$(document).ready(function(){
    initListeners();
});