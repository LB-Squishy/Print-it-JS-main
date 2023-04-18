//GESTION DES FLECHES DU CARROUSEL

// Ecoute du clic fleche gauche
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function() {
	console.log("Clic gauche OK!");
});

//ecoute du clic fleche droite
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function() {
	console.log("Clic droit OK!");
});

//GESTION DES POINTS DU CARROUSEL

//GESTION DES SLIDES DU CARROUSEL

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
