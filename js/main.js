const carouselLists = document.querySelector('.carousel__lists');
const carouselLeftArrow = document.querySelector('.carousel__left-arrow');
const carouselRightArrow = document.querySelector('.carousel__right-arrow');

let i = 1;
btnDisabled();
function btnDisabled() {
  if (i === 1) {
    carouselLeftArrow.style.opacity = '0.5';
    carouselLeftArrow.style.pointerEvents = 'none';
  } else if (i === 3) {
    carouselRightArrow.style.opacity = '0.5';
    carouselRightArrow.style.pointerEvents = 'none';
  } else {
    carouselRightArrow.style.opacity = '1';
    carouselLeftArrow.style.opacity = '1';
    carouselRightArrow.style.pointerEvents = 'auto';
    carouselLeftArrow.style.pointerEvents = 'auto';
  }
}

carouselLeftArrow.addEventListener('click', () => {
  if (i === 2 || i === 3) {
    carouselLists.style.left = `${50 * (i - 2)}%`;
    carouselLists.style.transform = `translateX(${-50 * (i - 2)}%)`;
    i--;
    btnDisabled();
  }
});

carouselRightArrow.addEventListener('click', () => {
  if (i === 1 || i === 2) {
    carouselLists.style.left = `${50 * i}%`;
    carouselLists.style.transform = `translateX(${-50 * i}%)`;
    i++;
    btnDisabled();
  }
});
