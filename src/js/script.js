// if (2*6 == 8*1) {
//     console.log("Верно")
// } else {
//     console.log("Ошибка")
// }


// let answer = confirm("Вам есть 18?");
// if (answer) {
//     console.log("проходи");
// } else {
//     console.log("уходи");
// }

// const num = 50;

// if (num < 49) {
//     console.log('неправильно');
// } else if (num > 100) {
//     console.log('много');
// } else {
//     console.log('верно');
// }


// $(document).ready(function(){ b
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     arrows: false,
//                     dots: true
//                 }

//             }
//         ]
        
//     });
// });
  




const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });