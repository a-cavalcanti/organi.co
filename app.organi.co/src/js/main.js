
ApplicationLoad = {
  init: function () {
    this.load_page();
    this.load_plugins();
  },

  load_page: function(){
    $(window).load(function(){
      $("#load").fadeOut(500).delay(500);
    });

  },
  load_plugins: function(){
  	console.log("Plugins loaded");


  	//Colorbox
  	$(".group1").colorbox({rel:'group1'});

  	//Slick Slider
  	$('.slider-home').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        mobileFirst: true,
        speed: 600
     });

  	//OWL-carrocel
  	$("#owl-noticias").owlCarousel({
      	items : 2,
      	itemsDesktop : [1199, 3],
      	itemsDesktopSmall : [979, 3],
      	itemsTablet : [768, 2],
      	pagination : false
      });


  }

}

$(document).ready(function(){ ApplicationLoad.init(); });