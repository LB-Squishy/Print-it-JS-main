/*TABLEAU DES SLIDES******************************************************
	pour slides avec image et tag
*/
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

/*NOUVEAU CARROUSEL******************************************************
	utilise "TABLEAU DES SLIDES" en entrée
*/

function newCarrousel() {
	let currentSlide = 0;
	dotCreate(currentSlide); //si présence de dot, sinon passer en commentaire
	function generateSlide() {
		document.querySelector(".banner-img").src = "./assets/images/slideshow/"+slides[currentSlide].image;
		document.querySelector("#banner p").innerHTML = slides[currentSlide].tagLine;
		dotCreate(currentSlide); //si présence de dot, sinon passer en commentaire
		console.log ("Vous êtes sur la slide " + currentSlide);
	}
	function goPreviousSlide() {
		const previousSlide = document.querySelector(".arrow_left");
		previousSlide.addEventListener("click", function() {
			currentSlide--;
			if (currentSlide < 0) {
				currentSlide = slides.length-1;
			} 
			generateSlide();
		});
	}
	function goNextSlide () {
		const nextSlide = document.querySelector(".arrow_right");
		nextSlide.addEventListener("click", function() {
			currentSlide++;
			if (currentSlide >= slides.length) {
				currentSlide = 0;
			} 
			generateSlide();
		});
	}
	goPreviousSlide();
	goNextSlide();
}
newCarrousel();

/*BULLETS POINTS POUR CARROUSEL******************************************
	AddOn de "NOUVEAU CARROUSEL"
*/

function dotCreate(currentSlide) {
	const dots = document.querySelector(".dots");
	dots.innerHTML= "";
	for (let dotIndex = 0; dotIndex <= slides.length-1; dotIndex++){
		const addDot = document.createElement("div");
		addDot.classList.add("dot");		
		if (dotIndex === currentSlide){
			addDot.classList.add("dot_selected");
		}
		dots.appendChild(addDot);
	}
}