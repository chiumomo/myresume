import $ from "jquery";

const scrollHide=()=>{
    var bodyClass = $('.Nav');
    var lastScrollY = 0;
    var screenWidth = window.innerWidth;

    window.addEventListener('scroll', function(){
        var st = window.scrollY;
        // 判斷是向上捲動，而且捲軸超過 200px
        if( ! st < 0  ){
            bodyClass.removeClass('show marginTop');
        }
        else if( st < lastScrollY) {
            bodyClass.addClass('show mask ');
            bodyClass.removeClass('marginTop');
        }
        else{
            bodyClass.removeClass('show mask');
        };
        

        if ( st<650 && screenWidth > 900 ){
            bodyClass.removeClass('mask ');
            bodyClass.addClass('marginTop')
        }else if ( st<400 && screenWidth > 700 ){
            bodyClass.removeClass('mask ');
            bodyClass.addClass('marginTop')
        }else if(st<200 && screenWidth < 700 ){
            bodyClass.removeClass('mask ');  
            bodyClass.addClass('marginTop')
        }else{
            bodyClass.removeClass('marginTop')
        };

        lastScrollY = st;
        
    });
}
    
export default scrollHide;


