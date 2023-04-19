// TABLEAU DES SLIDES******************************************************
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// comptage des slides

let totalSlides = slides.length;
console.log(totalSlides + " slides dans le carrousel");

//DEPART DU CARROUSEL******************************************************

let currentSlide = 0;
const actualImg = document.querySelector(".banner-img");
const actualTag = document.querySelector("#banner p");
console.log (currentSlide,actualImg,actualTag);

//GESTION DES FLECHES DU CARROUSEL*****************************************

// Ecoute du clic fleche gauche-précédent-condition retour derniere

const arrowLeft = document.querySelector(".arrow_left");

arrowLeft.addEventListener("click", function() {
	console.log("Clic gauche OK!");
	// Slide & Tag précédent avec condition de retour à la dernière
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = totalSlides-1;
	} 
	actualImg.src = "./assets/images/slideshow/"+slides[currentSlide].image;
	actualTag.innerHTML = slides[currentSlide].tagLine;
	console.log (currentSlide,actualImg,actualTag);
});

//ecoute du clic fleche droite-suivant-condition retour première

const arrowRight = document.querySelector(".arrow_right");

arrowRight.addEventListener("click", function() {
	console.log("Clic droit OK!");
	// Slide & Tag suivant avec condition de retour à la première
	currentSlide++;
	if (currentSlide >= totalSlides) {
		currentSlide = 0;
	} 
	actualImg.src = "./assets/images/slideshow/"+slides[currentSlide].image;
	actualTag.innerHTML = slides[currentSlide].tagLine;
	console.log (currentSlide,actualImg,actualTag);
});

//GESTION DES POINTS DU CARROUSEL******************************************

//ajout des points en fonction du nombre de slides

const dots = document.querySelector(".dots");

for (let slide = 0; slide <= totalSlides ; slide++){
	const addDot = document.createElement("div");
	addDot.classList.add("dot");
	dots.appendChild(addDot);
	//++ ajouter un if/else (où?) en fonction du slide avec .dot_selected au lieu de dot
};