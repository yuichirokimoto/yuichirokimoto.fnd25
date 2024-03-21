'use strict'
// 1行目に記載している 'use strict' は削除しないでください


let slideIndex = 0;
const slidesContainer = document.getElementById("cooking");
let displayedPhotos = [
    "C:\\dig-foundations\\カレー.png",
    "C:\\dig-foundations\\サラダ.png",
    "C:\\dig-foundations\\マリネ.png",
    "C:\\dig-foundations\\豚汁.png",
    // "C:\dig-foundations\Presen_DIG\picture\chikuzenni.png",
    "C:\\dig-foundations\\Presen_DIG\\picture\\chikuzenni.png",
    "C:\\dig-foundations\\Presen_DIG\\picture\\taco.jpg",
    "C:\\dig-foundations\\Presen_DIG\\picture\\oden.png.",
    "C:\\dig-foundations\\Presen_DIG\\picture\\beer.png",
];

// 初期表示
updateSlide();

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = displayedPhotos.length - 1;
    } else if (slideIndex >= displayedPhotos.length) {
        slideIndex = 0;
    }
    updateSlide();
}

function updateSlide() {
    slidesContainer.innerHTML = ''; // 一旦表示をクリア
    const currentPhoto = displayedPhotos[slideIndex];
    const imgElement = document.createElement('img');
    imgElement.src = currentPhoto;
    imgElement.width = 150;
    imgElement.height = 200;
    imgElement.alt = "写真";
    slidesContainer.appendChild(imgElement);
}
