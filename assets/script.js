const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
// debugger;
// slides.length
// console.log(slides);
//

// Ajouter la premiere image du slide
//trouver élément id banner

let indexSlideActuelle = 0;
//insérer balise img et p dans le html
function afficherSlide() {
  document.querySelector(".banner-img").src = `./assets/images/slideshow/${slides[indexSlideActuelle].image}`;
  document.querySelector(".tagline").innerHTML = slides[indexSlideActuelle].tagLine;
  //créé autant de points vides qu'il y a de slides
  let bulletPoints = document.querySelector(".dots");
  let dotElements = ""
  let dotElement = `
  <div class="dot"></div>
  `;

  slides.forEach(function () {
    dotElements += dotElement
  })
  bulletPoints.innerHTML = dotElements

  //ajouter la classe dot_selected à la position de la slide
  let dots = document.querySelectorAll(".dot")
  dots[indexSlideActuelle].classList.add("dot_selected")

  // .classList.add("dot_selected")
}
afficherSlide();

// Gestionnaire d'événement sur les flèches du carrousel
let arrowLeftCarrousel = document.querySelector(".arrow_left");
arrowLeftCarrousel.addEventListener("click", () => {
  console.log("gauche ok");
  // si on est sur la 1ere img on saffiche la derniere img
  if (indexSlideActuelle == 0)
    indexSlideActuelle = slides.length - 1;
  else
    indexSlideActuelle -= 1;
  console.log(indexSlideActuelle);
  afficherSlide();
});

let arrowRightCarrousel = document.querySelector(".arrow_right");
arrowRightCarrousel.addEventListener("click", () => {
  console.log("droite ok");
  // Si on est sur la derniere img on affiche la 1ere
  if (indexSlideActuelle == (slides.length - 1))
    indexSlideActuelle = 0
  else
    indexSlideActuelle++;
  console.log(indexSlideActuelle);
  afficherSlide();
});

