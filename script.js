const swiper = new Swiper(".swiper", {
	// Optional parameters
	slidesPerView: 3,
	spaceBetween: 30,loop: true,
	// Navigation arrows
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev"
	},
  mousewheel: {
   releaseOnEdges: true,
	eventsTarget: "container",
  }
  });
  