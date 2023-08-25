$(document).ready(function(){
    $('#menu').click(function(){
        $("i",this).toggleClass('fa fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa fa-times');
        $('.navbar').removeClass('nav-toggle');
        $('section').each(function(){
            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top>= offset && top< offset+height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href=`#${id}`]').addClass('active');
            }
        });
    });
});