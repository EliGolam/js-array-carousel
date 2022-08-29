// Initial script handshake
console.log('DEBUG - script.js: Ok!');

// Create Array of carousel-items
const carouselImg = document.querySelectorAll('.ms_carousel-item');
console.log('DEBUG - carouselIMG:', carouselImg);

// Carousel buttons
const carouselBtnPrev = document.querySelector('.ms_carousel-previous');
const carouselBtnNext = document.querySelector('.ms_carousel-next');

// Carousel Previous 
carouselBtnPrev.addEventListener('click', () => {
    console.log('DEBUG - BtnPrev: Previous');

    // Find currently active image
    for(let i = 0; i < carouselImg.length; i++) {
        if (carouselImg[i].classList.contains('active')){
            if (i === 0) {
                carouselImg[carouselImg.length - 1].classList.add('active');
            } else {
                carouselImg[i - 1].classList.add('active');
            }

            carouselImg[i].classList.remove('active');
            break;
        }
    }
})

carouselBtnNext.addEventListener('click', () => {
    console.log('DEBUG - BtnNext: Next');

    // Find currently active image
    for (let i = 0; i < carouselImg.length; i++) {
        if (carouselImg[i].classList.contains('active')) {
            if (i === carouselImg.length - 1) {
                carouselImg[0].classList.add('active');
            } else {
                carouselImg[i + 1].classList.add('active');
            }

            carouselImg[i].classList.remove('active');
            break;
        }
    }
})