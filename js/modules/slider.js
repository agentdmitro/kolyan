const swiper = new Swiper('.swiper-1', {
  slidesPerView: 'auto',
  loop: true,
  watchOverflow: true,
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },
  spaceBetween: 35,
  autoHeight: true,
});

const swiper2 = new Swiper('.swiper-2', {
  slidesPerView: 'auto',
  loop: true,
  watchOverflow: true,
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
  spaceBetween: 25,
  autoHeight: true,
});

// $('.swiper-button-prev').remove();
// $('.swiper-button-next').remove();

// const swiper = new Swiper('.swiper', {
// 	slidesPerView: 1,
// 	watchOverflow: true,
// 	pagination: {
// 		el: '.swiper-pagination',
// 	},
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	spaceBetween: 20,
// 	autoHeight: true
// });
