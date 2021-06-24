//schedule
$("#click-me").click(function () {
    
    $.ajax({
        success: function (data) {                               
            console.log(data);   
            $('#schedule').addClass("show"); 
        },
        async: true
    });    
    
});

$(".schedulebox .close").click(function(){
    
    $(this).closest(".schedulebox").removeClass("show");
    
});

//contact
$("#click-me").click(function () {
    
    $.ajax({
        success: function (data) {                               
            console.log(data);   
            $('#contact').addClass("show"); 
        },
        async: true
    });    
    
});

$(".contactbox .close").click(function(){
    
    $(this).closest(".contactbox").removeClass("show");
    
});

//nav
function interval() {
    while (true) {
        setInterval(showImage, 1);
    }
}

function showImage() {

    var x = clientX;
    var y = clientY;
    var image = document.getElementById("../css/");
    image.style.left = x;
    image.style.top = y;
 }