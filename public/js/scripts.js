var APP = function () {

    var mod = {};

    mod.slider = function () {
        $('#slippry').slippry({
            captions: false
        });
    };

    mod.validateContact = function () {
        $('#form-contato').validator();
    };

    mod.scrollToTop = function () {
        // hide #back-top first
        $("#back-top").hide();

        // fade in #back-top

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    };

    mod.openMenuMobile = function () {
        $(".open-menu-bottom").on("click", function () {
            if ($("#menu-list-responsive").hasClass("isOpen")) {
                $("#menu-list-responsive").addClass("hide").removeClass("isOpen");
            }
            else {
                $("#menu-list-responsive").removeClass("hide").addClass("isOpen");
            }
        });
    };

    return {
        init: function () {
            mod.slider();
            mod.validateContact();
            mod.scrollToTop();
            mod.openMenuMobile();
        }
    };
}($);