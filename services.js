var swiper = new Swiper(".mySwiper", {
    spaceBetween: 1,
    loop: true,
    
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
  var menubtn = document.querySelector('#menu-btn');
var menu = document.querySelector('nav .links ul');


menubtn.addEventListener('click' , function(){
 
  document.querySelector('nav .links ul').classList.toggle("show");
});