// Initial script handshake
console.log('DEBUG - script.js: Ok!');

// Create Array of carousel-items
const carouselImg = document.querySelectorAll('.ms_carousel-item');
const carouselNav = document.querySelectorAll('.ms_carousel-nav-img');
console.log('DEBUG - carousel: ', carouselImg, carouselNav);

// Carousel buttons
const carouselBtnPrev = document.querySelector('.ms_carousel-previous');
const carouselBtnNext = document.querySelector('.ms_carousel-next');

// **************************************************************************
// CAROUSEL BUTTONS
// Carousel Previous 
carouselBtnPrev.addEventListener('click', () => {
    console.log('DEBUG - BtnPrev: Previous');

    // Find currently active image
    for(let i = 0; i < carouselImg.length; i++) {
        if (carouselImg[i].classList.contains('active')){
            if (i === 0) {
                carouselImg[carouselImg.length - 1].classList.add('active');
                carouselNav[carouselImg.length - 1].classList.add('active');
            } else {
                carouselImg[i - 1].classList.add('active');
                carouselNav[i - 1].classList.add('active');
            }

            carouselImg[i].classList.remove('active');
            carouselNav[i].classList.remove('active');
            break;
        }
    }
})

// Carousel Next 
carouselBtnNext.addEventListener('click', () => {
    console.log('DEBUG - BtnNext: Next');

    // Find currently active image
    for (let i = 0; i < carouselImg.length; i++) {
        if (carouselImg[i].classList.contains('active')) {
            if (i === carouselImg.length - 1) {
                carouselImg[0].classList.add('active');
                carouselNav[0].classList.add('active');
            } else {
                carouselImg[i + 1].classList.add('active');
                carouselNav[i + 1].classList.add('active');
            }

            carouselImg[i].classList.remove('active');
            carouselNav[i].classList.remove('active');
            break;
        }
    }
})

// **************************************************************************
// CAROUSEL NAVIGATION
for (let i = 0; i < carouselNav.length; i++) {
    carouselNav[i].addEventListener('click', () => {
        console.log('DEBUG - carouselNav Click: OK!');

        for (let j = 0; j < carouselNav.length; j++) {
            if (j === i) {
                continue;
            }
            carouselImg[j].classList.remove('active');
            carouselNav[j].classList.remove('active');
        }

        carouselImg[i].classList.add('active');
        carouselNav[i].classList.add('active');
    })
}

