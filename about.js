var swiper = new Swiper(".mySwiper", {
    spaceBetween: 1,
    loop: true,
    centeredSlides: true,
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
        slidesPerView: 3,
      },
    },
  });
  var menubtn = document.querySelector('#menu-btn');



menubtn.addEventListener('click' , function(){
 
  document.querySelector('nav .links ul').classList.toggle("show");
});