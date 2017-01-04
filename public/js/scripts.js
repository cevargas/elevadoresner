var APP = function () {

    var mod = {};
    
    mod.slider = function(){
       $('#slippry').slippry({
           captions: false
       });  
    };
    
    mod.responsive = function(){
        $( window ).resize(function() {
            $("#logo").removeClass('col-md-3').addClass('col-md-6');
        });
        
    };
    
    return { 
        init: function(){
            mod.slider();
            //mod.responsive();            
        }
    };

}($);