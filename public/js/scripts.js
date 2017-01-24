var APP = function (PHOTOSWIPE) {
    
    var mod = {};    
    var slippry = null;

    mod.slider = function () {
        slippry = $('#slippry').slippry({
            captions: false,
            transition: 'horizontal',
            pause: 12000
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

    var addLoadEvent = function (func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function () {
                if (oldonload) {
                    oldonload();
                }
                func();
            }
        }
    };

    mod.outdated = function () {
        addLoadEvent(outdatedBrowser({
            bgColor: '#f25648',
            color: '#ffffff',
            lowerThan: 'transform',
            languagePath: 'public/libs/outdated/lang/pt-br.html'
        }));
    };
    
    mod.resize = function(){     
        
        var cachedWidth = $(window).width();
        $( window ).resize(function(e) {
            
            var newWidth = $(window).width();
            if(newWidth !== cachedWidth){
                
                //reinicializa o slider
                if(slippry !== null){  
                    if ($("#slippry").length) {
                        slippry.reloadSlider();
                    }
                }
                
                cachedWidth = newWidth;
            }
        });
    };

    return {
        init: function () {
            mod.slider();
            mod.validateContact();
            mod.scrollToTop();
            mod.openMenuMobile();
            mod.outdated();
            mod.resize();       
            
            PHOTOSWIPE('.my-gallery');
        }
    };
}(PHOTOSWIPE || {});
