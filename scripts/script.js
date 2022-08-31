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
    moveCarousel(carouselImg, carouselNav, 'previous');
})

// Carousel Next 
carouselBtnNext.addEventListener('click', () => {
    console.log('DEBUG - BtnNext: Next');
    moveCarousel(carouselImg, carouselNav, 'next');
})


function moveCarousel (imgs, nav, direction) {
    for (let i = 0; i < imgs.length; i++) {
        console.log('DEBUG - renderImages: OK!');
        // Define direction: 
        direction = (direction === 'previous' || direction === 'back' || direction === -1) ? -1 : 1;
        let position;

        // Find currently active image
        if ( imgs[i].classList.contains('active') ) {
            // When active image is found we need to make sure the new image will not be out of bounds
            switch (i + direction) {
                case (imgs.length): {
                    position = 0;
                    break;
                }
                case (-1): {
                    position = imgs.length - 1;
                    break;
                }
                default: {
                    position = i + direction;
                }
            }

            // Activate new image on carousel trhough position
            imgs[position].classList.add('active');
            nav[position].classList.add('active');

            // Remove previously active image
            imgs[i].classList.remove('active');
            nav[i].classList.remove('active');
            break;
        }
    }
}

// **************************************************************************
// CAROUSEL NAVIGATION
for (let i = 0; i < carouselImg.length; i++) {
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

// ***************************************************************************


