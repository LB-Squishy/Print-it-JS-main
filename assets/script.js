//GESTION DES SLIDES DU CARROUSEL***************************************

// tableau des slides
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
// test de modif de quantité de slides (décommenter la ligne suivante)
// totalSlides = 12;
console.log(totalSlides + " slides dans le carrousel");

//GESTION DES FLECHES DU CARROUSEL****************************************

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

//GESTION DES POINTS DU CARROUSEL******************************************

//ajout des points en fonction du nombre de slides
const dots = document.querySelector(".dots");
for (let slide = 0; slide <= totalSlides ; slide++){
	const addDot = document.createElement("div");
	addDot.classList.add("dot");
	dots.appendChild(addDot);
	//++ ajouter un if/else en fonction du slide avec .dot_selected au lieu de dot
};


