$(function () {


    // Add dynamic Padding To Body 
    $("body").css("padding-top", $(".custom-navbar").height())

    $(window).resize(function () {
        $("body").css("padding-top", $(".custom-navbar").height())
    })

    // Footer == dynamic Copyright Year
    let Date_now = new Date().getFullYear();
    let get_full_year_javascript = document.getElementById("get_full_year_javascript").textContent = Date_now;


    // Scroll To Top
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            if ($('.scroll-icon').is(':hidden')) {
                $('.scroll-icon').css("display", "flex")
            }
        } else {
            $('.scroll-icon').fadeOut(500);
        }
    })

    // scroll to top (click)
    $('.scroll-icon').on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 500)
    });

    AOS.init();


    // // sync scroll with nav

    $(window).scroll(function () {

        

        $('.block_scroll').each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 90) {

                var attrId = $(this).attr('id');


                $('.custom-navbar .nav-link').removeClass('active');

                $('.custom-navbar .nav-link[data-scroll =' + attrId + ']').addClass('active');

            }
        });

        // Scroll-to-top

        if ($(window).scrollTop() > 500) {

            if ($('.scroll-to-top').is(':hidden')) {

                $('.scroll-to-top').fadeIn(500);
            }



        } else {
            $('.scroll-to-top').fadeOut(500)
        }


        $('.scroll-to-top').on('click', function () {

            $('html, body').animate({
                scrollTop: 0
            }, 500)

        });


    });

    // End  sync scroll with nav



});

// Loading 
$( document ).ready(function() {
    $(".loading").fadeOut(1500);
    $("body").css("overflowY" , "scroll")
});