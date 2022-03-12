const sliderContainer = document.querySelector('.slide-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButtom = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;


let ActiveSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButtom.addEventListener('click', () => {changeSlide('up')});
downButton.addEventListener('click', () => {changeSlide('down')});

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === 'up') {
        ActiveSlideIndex++
        if (ActiveSlideIndex > slidesLength - 1) {
            ActiveSlideIndex = 0;
        }
    }

    else if (direction === 'down') {
        ActiveSlideIndex--
        if (ActiveSlideIndex < 0) {
            ActiveSlideIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${ActiveSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${ActiveSlideIndex * sliderHeight}px)`;
}