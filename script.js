$(document).ready(function(){
    $('#menu').click(function(){
        $("i",this).toggleClass('fa fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
});