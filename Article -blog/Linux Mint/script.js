// faire en sorte que les les titre qui sont marquer en h4 dans le html font des slide 
// document.addEventListener('DOMContentLoaded', function() {
//   const headingElements = document.querySelectorAll('h4');
//   const numSlides = headingElements.length;
//   let currentSlide = 0;

//   // Crée un conteneur pour les slides
//   const sliderContainer = document.createElement('div');
//   sliderContainer.classList.add('slider-container');
//   document.body.appendChild(sliderContainer);

//   // Style de base pour le conteneur et les slides (à adapter en CSS)
//   sliderContainer.style.position = 'relative';
//   sliderContainer.style.overflow = 'hidden';
//   sliderContainer.style.width = '100%'; // Ajuste selon tes besoins

//   headingElements.forEach((heading, index) => {
//     const slide = document.createElement('div');
//     slide.classList.add('slide');
//     slide.style.position = 'absolute';
//     slide.style.top = '0';
//     slide.style.left = `${index * 100}%`; // Positionne chaque slide horizontalement
//     slide.style.width = '100%';
//     slide.style.transition = 'transform 0.5s ease-in-out'; // Animation de transition

//     // Déplace le contenu suivant le h4 à l'intérieur de la slide
//     let nextSibling = heading.nextElementSibling;
//     slide.appendChild(heading.cloneNode(true)); // Clone le h4 pour le garder visible
//     while (nextSibling && nextSibling.tagName !== 'H4') {
//       const tempSibling = nextSibling;
//       nextSibling = nextSibling.nextElementSibling;
//       slide.appendChild(tempSibling);
//     }

//     sliderContainer.appendChild(slide);
//   });

//   // Fonctions pour naviguer
//   function nextSlide() {
//     currentSlide = (currentSlide + 1) % numSlides;
//     updateSlider();
//   }

//   function prevSlide() {
//     currentSlide = (currentSlide - 1 + numSlides) % numSlides;
//     updateSlider();
//   }

//   function updateSlider() {
//     sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
//   }

//   // Ajoute des boutons de navigation (facultatif)
//   const nextButton = document.createElement('button');
//   nextButton.textContent = 'Suivant';
//   nextButton.addEventListener('click', nextSlide);
//   document.body.appendChild(nextButton);

//   const prevButton = document.createElement('button');
//   prevButton.textContent = 'Précédent';
//   prevButton.addEventListener('click', prevSlide);
//   document.body.appendChild(prevButton);

//   // Initialise l'affichage
//   updateSlider();
// });

//mon inttention et de et que quand on descend sur le blog les titre arrive comme des slide pour ajouter de l'animation 