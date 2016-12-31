var APP = function () {

    var mod = {};
    
    mod.slider = function(){
       $('#slippry').slippry({
           captions: false
       });  
    };
    
    return { 
        init: function(){
            mod.slider();
        }
    };

}($);