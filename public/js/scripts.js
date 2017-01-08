var APP = function () {

    var mod = {};
    
    mod.slider = function(){
       $('#slippry').slippry({
           captions: false
       });  
    };

    mod.scrollNavbar = function(){
      /**
        * Listen to scroll to change header opacity class
        */
       function checkScroll(){
           var startY = $('.fixed-nav-bar').height() * 2; //The point where the navbar changes in px

           if($(window).scrollTop() > startY){
               $('.fixed-nav-bar').addClass("scrolled");
           }else{
               $('.fixed-nav-bar').removeClass("scrolled");
           }
       }

       if($('.fixed-nav-bar').length > 0){
           $(window).on("scroll load resize", function(){
               checkScroll();
           });
       }  
    };
    
    mod.validateContact = function(){
        $('#form-contato').validator(); 
    };
    
    mod.validateOrcamento = function(){
        $('#form-orcamento').validator(); 
    };
    
    mod.scrollToTop = function(){
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
    
    mod.waypoints = function () {
        $('.wp1').waypoint(function () {
            $('.wp1').addClass('animated fadeInLeft');
        }, {
            offset: '75%'
        });
        $('.wp2').waypoint(function () {
            $('.wp2').addClass('animated fadeInDown');
        }, {
            offset: '75%'
        });
        $('.wp3').waypoint(function () {
            $('.wp3').addClass('animated bounceInDown');
        }, {
            offset: '75%'
        });
        $('.wp4').waypoint(function () {
            $('.wp4').addClass('animated fadeInDown');
        }, {
            offset: '75%'
        });
        
        $('.wp5').waypoint(function () {
            $('.wp5').addClass('animated bounceInDown');
        }, {
            offset: '75%'
        });
    };
    
    mod.openMenuMobile = function() {
        $(".open-menu-bottom").on("click", function(){
            if($("#menu-list-responsive").hasClass("isOpen")) {
                $("#menu-list-responsive").addClass("hide").removeClass("isOpen");    
            }
            else {
                $("#menu-list-responsive").removeClass("hide").addClass("isOpen");            
            }
        });
    };
    
    return { 
        init: function(){
            mod.slider();
            //mod.scrollNavbar();
            mod.validateContact();   
            mod.validateOrcamento();
            mod.scrollToTop();
            mod.openMenuMobile();
            mod.waypoints();
        }
    };

}($);