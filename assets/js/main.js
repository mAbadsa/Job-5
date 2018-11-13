$(document).ready(function($) { 
    $('ul.navbar-nav a').filter(function(){return           this.href==location.href}).addClass('active').siblings().removeClass('active');
        $('ul.navbar-nav a').click(function(){
            $(this).siblings().removeClass('active');
            $(this).addClass('active').siblings().removeClass('active');
    })
});
