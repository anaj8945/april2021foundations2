$(function() {
    $("body").on("click", "#nav", function() {
        $("nav").toggleClass("menu-show");
    });
    $("nav > a").click(function() {
        $("nav").removeClass("menu-show");
    });
});