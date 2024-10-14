function openPopup(imageSrc) {
  const popup = document.getElementById('image-popup');
  const popupImage = document.querySelector('.popup-image');
  popupImage.src = imageSrc;
  popup.style.display = 'flex';
  popup.addEventListener('click', closePopup);
}

function closePopup() {
  const popup = document.getElementById('image-popup');
  popup.style.display = 'none';
  popup.removeEventListener('click', closePopup);
}

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    openPopup(img.src);
  });
});

function enableFriendCardPopup() {
  document.querySelectorAll('.friend-card img').forEach(img => {
    img.addEventListener('click', () => {
      openPopup(img.src);
    });
  });
}

const showStoriesButton = document.getElementById('show-stories-button');
showStoriesButton.addEventListener('click', () => {
  const storiesSection = document.getElementById('stories-section');
  const popup = document.getElementById('image-popup');
  
  if (popup.style.display === 'flex') {
    closePopup();
  }
  
  storiesSection.style.display = 'block';
  enableFriendCardPopup();
});

const audioElement = document.getElementById('background-audio');

document.body.addEventListener('click', (event) => {
  const isGalleryImage = event.target.closest('.gallery img');
  const isShowStoriesButton = event.target.closest('#show-stories-button');

  if (!isGalleryImage && !isShowStoriesButton && audioElement.paused) {
    audioElement.play();
  }
});

const imagePopup = document.getElementById('image-popup');
imagePopup.addEventListener('click', (event) => {
  const isImage = event.target.classList.contains('popup-image');
  
  if (!isImage) {
    closePopup();
  }
});

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  const r = random(255);
  const g = random(255);
  const b = random(255);
  const left = Math.random() * 80 + 'vw';
  const duration = random(5) + 5;

  return `
    background-color: rgba(${r},${g},${b},0.7);
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    left: ${left};
    animation: float ${duration}s ease-in infinite;
  `;
}

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.cssText = getRandomStyles();
  document.getElementById('balloon-container').appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 10000);
}

function generateBalloons() {
  for (let i = 0; i < 10; i++) {
    setTimeout(createBalloon, i * 500);
  }
}

window.onload = generateBalloons;
