$(document).ready(function() {
$(".menu-toggle").click(function(event){
    event.stopPropagation();
    if($("#burger_menu").hasClass('mobile-menu-hide'))
    {
        $("#burger_menu").removeClass('mobile-menu-hide');
    }
    else
    {
       $("#burger_menu").addClass('mobile-menu-hide');
    }
})
$("#burger_menu").click(function(event) {
    event.stopPropagation();
});
$("#page_container").click(function(event) {
    $("#burger_menu").addClass('mobile-menu-hide');
});
});
