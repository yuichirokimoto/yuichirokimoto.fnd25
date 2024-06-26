'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect:'cube',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


// let slideIndex = 0;
// const slidesContainer = document.getElementById("cooking");
// let displayedPhotos = [
//     "カレー.png",
//     "サラダ.png",
//     "マリネ.png",
//     "豚汁.png",
//     "chikuzenni.png",
//     "taco.jpg",
//     "oden.png",
//     "beer.png",
//     "sanshin.jpg",
//     "beer2.jpg",
//     "beach2.jpg",
// ];

// // 初期表示
// updateSlide();

// function moveSlide(n) {
//     slideIndex += n;
//     if (slideIndex < 0) {
//         slideIndex = displayedPhotos.length - 1;
//     } else if (slideIndex >= displayedPhotos.length) {
//         slideIndex = 0;
//     }
//     updateSlide();
// }

// function updateSlide() {
//     slidesContainer.innerHTML = ''; // 一旦表示をクリア
//     const currentPhoto = displayedPhotos[slideIndex];
//     const imgElement = document.createElement('img');
//     imgElement.src = currentPhoto;
//     imgElement.width = 150;
//     imgElement.height = 200;
//     imgElement.alt = "写真";
//     slidesContainer.appendChild(imgElement);
// }
