$(document).ready(function($) { 
//      $( 'ul.navbar-nav li' ).on( 'click', function() {
//            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
//            $( this ).addClass( 'active' );
//      });
    
            $('ul.navbar-nav a').filter(function(){return           this.href==location.href}).addClass('active').siblings().removeClass('active')
                $('ul.navbar-nav a').click(function(){
                $(this).addClass('active').siblings().removeClass('active')	
            })
});