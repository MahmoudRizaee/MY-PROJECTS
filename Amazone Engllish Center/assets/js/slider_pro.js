const track = document.getElementById('sliderTrack_pro');
const dotsContainer = document.getElementById('sliderDots');
const totalSlides = track.children.length;
let currentIndex = 0;
let interval;

const firstClone = track.children[0].cloneNode(true);
track.appendChild(firstClone);

const slidesCount = totalSlides + 1;

const updateDots = () => {
  [...dotsContainer.children].forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
};

const updateSlider = () => {
  const cardWidth = track.children[0].offsetWidth;
  track.style.transition = 'transform 0.5s ease-in-out';
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  updateDots();
};

const createDots = () => {
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  }
};

const nextSlide = () => {
  currentIndex++;
  updateSlider();

  if (currentIndex === slidesCount - 1) {
    setTimeout(() => {
      track.style.transition = 'none';
      currentIndex = 0;
      track.style.transform = `translateX(0px)`;
      updateDots();
    }, 500);
  }
};

const prevSlide = () => {
  const cardWidth = track.children[0].offsetWidth;

  if (currentIndex === 0) {
    track.style.transition = 'none';
    currentIndex = slidesCount - 1;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    setTimeout(() => {
      track.style.transition = 'transform 0.5s ease-in-out';
      currentIndex--;
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      updateDots();
    }, 20);
  } else {
    currentIndex--;
    updateSlider();
  }
};

const startAutoplay = () => {
  interval = setInterval(nextSlide, 3000);
};

const stopAutoplay = () => {
  clearInterval(interval);
};

document.getElementById('next').addEventListener('click', () => {
  nextSlide();
  stopAutoplay();
  startAutoplay();
});

document.getElementById('prev').addEventListener('click', () => {
  prevSlide();
  stopAutoplay();
  startAutoplay();
});

document.getElementById('slider_pro').addEventListener('mouseenter', stopAutoplay);
document.getElementById('slider_pro').addEventListener('mouseleave', startAutoplay);

createDots();
updateSlider();
startAutoplay();