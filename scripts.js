function openPopup(imageSrc) {
    const popup = document.getElementById('image-popup');
    const popupImage = document.querySelector('.popup-image');
    popupImage.src = imageSrc;
    popup.style.display = 'flex'; // Mostra il popup
  }
  
  function closePopup() {
    const popup = document.getElementById('image-popup');
    popup.style.display = 'none'; // Nasconde il popup
  }
  
  // Gestione clic sulle immagini della galleria
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      // Chiudi il popup della sezione avvistamenti se è aperto
      /*
      const storiesSection = document.getElementById('stories-section');
      if (storiesSection.style.display === 'block') {
        storiesSection.style.display = 'none'; // Nascondi le storie
      }
        */
      openPopup(img.src);
    });
  });
  
  // Gestione clic sul bottone per mostrare le storie
  const showStoriesButton = document.getElementById('show-stories-button');
  showStoriesButton.addEventListener('click', () => {
    const storiesSection = document.getElementById('stories-section');
    // Chiudi il popup se è aperto
    const popup = document.getElementById('image-popup');
    if (popup.style.display === 'flex') {
      closePopup();
    }
    storiesSection.style.display = 'block'; // Mostra le storie
  });
  
  // Avvia l'audio quando l'utente clicca per la prima volta sul documento
  const audioElement = document.getElementById('background-audio');
  
  document.body.addEventListener('click', (event) => {
    const isGalleryImage = event.target.closest('.gallery img');
    const isShowStoriesButton = event.target.closest('#show-stories-button');
  
    if (!isGalleryImage && !isShowStoriesButton && audioElement.paused) {
      audioElement.play();
    }
  });
  