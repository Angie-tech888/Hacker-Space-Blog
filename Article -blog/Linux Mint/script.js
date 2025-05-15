// faire en sorte que les les titre qui sont marquer en h4 dans le html font des slide 
document.addEventListener('DOMContentLoaded', function() {
  const titreAnimes = document.querySelectorAll('.titre-anime');
  const containerVertical = document.querySelector('.container-vertical');
  const slidesVertical = document.querySelectorAll('.slide-vertical');
  let currentSlide = 0;
  let isScrolling = false;

  // Fonction pour vérifier et animer les titres au défilement
  function checkSlide() {
    titreAnimes.forEach(titre => {
      const slideInAt = (window.scrollY + window.innerHeight) - titre.offsetHeight / 2;
      const titreBottom = titre.offsetTop + titre.offsetHeight;
      const isHalfShown = slideInAt > titre.offsetTop;
      const isNotScrolledPast = window.scrollY < titreBottom;

      if (isHalfShown && isNotScrolledPast) {
        titre.classList.add('anime');
      } else {
        titre.classList.remove('anime');
      }
    });
  }

  // Gestion du défilement vertical pour les slides et animation horizontale (simplifiée)
  if (containerVertical && slidesVertical.length > 0) {
    containerVertical.addEventListener('wheel', (event) => {
      if (isScrolling) return;
      isScrolling = true;

      if (event.deltaY > 0) {
        currentSlide++;
      } else {
        currentSlide--;
      }

      currentSlide = Math.max(0, Math.min(currentSlide, slidesVertical.length - 1));

      containerVertical.style.transform = `translateY(-${currentSlide * 100}vh)`;

      // Animation horizontale simplifiée des titres au changement de slide
      slidesVertical.forEach((slide, index) => {
        const titreInSlide = slide.querySelector('.titre-anime');
        if (titreInSlide) {
          titreInSlide.classList.remove('anime'); // Réinitialise l'animation
          if (index === currentSlide) {
            // Ajoute une classe spécifique pour l'animation horizontale (à définir en CSS)
            titreInSlide.classList.add('anime-horizontal');
            // Ou tu peux manipuler directement la propriété transform pour un effet plus complexe
            // titreInSlide.style.transform = `translateX(${window.innerWidth * 0.2}px)`;
          }
        }
      });

      setTimeout(() => {
        isScrolling = false;
      }, 1000); // Ajustez le délai selon la durée de l'animation
    });

    // Vérification initiale des titres
    window.addEventListener('scroll', checkSlide);
    checkSlide();
  } else {
    // Si la structure des slides verticales n'est pas trouvée, on anime juste les titres au défilement
    window.addEventListener('scroll', checkSlide);
    checkSlide();
  }
});