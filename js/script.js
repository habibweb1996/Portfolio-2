jQuery(document).ready(function (){
        /*new WOW().init();


        jQuery('.university-statistics').appear(function (){
            jQuery(".counter").countTo();
        });
*/
    jQuery(window).scroll(function (){
        if (jQuery(this).scrollTop() > 0){
            jQuery('.side').addClass('side-fixed');
        }else{
            jQuery('.side').removeClass('side-fixed');
        }
    });
    
    
});