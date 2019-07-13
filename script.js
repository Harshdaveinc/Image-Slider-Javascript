console.log("working fine man !! ")
let leftArrow = document.getElementById('arrow-left');
let rightArrow = document.getElementById('arrow-right');
let images = document.getElementsByClassName('slide');

let sliderWrap = document.getElementById('slider');
let current = 0;
let lastImage = (images.length * 100);
let stoper = ((images.length - 1) * 100);

function countWidth() {
  sliderWrap.style.width = lastImage + '%';
  for (let i = 0; i < images.length; i++) {
    images[i].style.width = (100 / images.length) + '%';
  }
}

function slideRight() {
  current += 100;
  if (current === lastImage) {
    current = 0;
  }
  sliderWrap.style.left = "-" + current + '%';
}

rightArrow.addEventListener('click', rightArrowClick);

function rightArrowClick() {
  if (current === stoper) {
    sliderWrap.style.left = '0%';
  }
  slideRight();
};

function slideLeft() {
  current -= 100;
  if (current === -1) {
    current = stoper;
  }
  sliderWrap.style.left = '-' + current + '%';
}


leftArrow.addEventListener('click', function () {
  if (current === 0) {
    current += lastImage;
    sliderWrap.style.left = '-' + current + '%';
  }
  slideLeft();
});

countWidth();