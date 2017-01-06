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
    
    return { 
        init: function(){
            mod.slider();
            //mod.scrollNavbar();
            mod.validateContact();   
            mod.validateOrcamento();
            mod.scrollToTop();
        }
    };

}($);