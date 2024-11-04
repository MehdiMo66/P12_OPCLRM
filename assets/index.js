
const slides = [
	{
		"image":"slide1.webp",
		
	},
	{
		"image":"slide2.webp",
		
	},
    {
		"image":"slide3.webp",
		
	}

]

// Img + Text
const banner = document.getElementById("carousel");
let index = 0;

const slide = document.createElement("img");
slide.classList.add("banner-img");
slide.src = `assets/images/${slides[index].image}`;
banner.appendChild(slide);


//Dots
const dots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("span");
	dot.classList.add("dot")
	dot.classList.add(`dot${i}`)
	dots.appendChild(dot)
}

let dotSelected = document.querySelector(`.dot${index}`);
dotSelected.classList.add("dot_selected");

//ARROWS
const arrowLeft = document.querySelector(".fa-angle-left");
const arrowRight = document.querySelector(".fa-angle-right");


function ArrowDotCLick(index) {
	dotSelected.classList.remove(`dot_selected`);
	slide.src = `assets/images/${slides[index].image}`;
	dotSelected = document.querySelector(`.dot${index}`);
	dotSelected.classList.add("dot_selected"); 
}



function arrowClick(direction) {
	switch (direction) {
		case "left":
			index--;
			if (index < 0) {
				index = slides.length - 1;
			}
			break;
		case "right":
			index++;
			if (index > slides.length - 1) {
				index = 0;
			}
			break;
		}
		
	ArrowDotCLick(index)
	}

arrowLeft.addEventListener("click", () => {
	arrowClick("left");
});
arrowRight.addEventListener("click", () => {
	arrowClick("right");
});

// Dots click 

for (let i = 0; i < slides.length ; i++) {
	let dot = document.querySelector(`.dot${i}`)
	dot.addEventListener("click", () => {
		ArrowDotCLick(i);
	});
}

