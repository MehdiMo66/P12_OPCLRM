
const slides2 = [
	{
		"image":"slide4.webp",
		
	},
	{
		"image":"slide5.webp",
		
	},
    {
		"image":"slide6.webp",
		
	}

]

// Img + Text
const banner2 = document.getElementById("carousel2");
let index2 = 0;


const slide2 = document.createElement("img");
slide2.classList.add("banner-img");
slide2.src = `assets/images/${slides2[index2].image}`;
banner2.appendChild(slide2);


//Dots
const dots2 = document.getElementById("dots2");

for (let i = 0; i < slides.length; i++) {
	let dot2 = document.createElement("span");
	dot2.classList.add("dot")
	dot2.classList.add(`dot${i}`)
	dots2.appendChild(dot2)
}

let dotSelected2 = document.querySelector(`.dot${index2}`);
dotSelected2.classList.add("dot_selected");

//ARROWS
const arrowLeft2 = document.getElementById("angle-left");
const arrowRight2 = document.getElementById("angle-right");


function ArrowDotCLick(index2) {
	dotSelected2.classList.remove(`dot_selected`);
	slide2.src = `assets/images/${slides2[index2].image}`;
	dotSelected2 = document.querySelector(`.dot${index2}`);
	dotSelected2.classList.add("dot_selected"); 
}



function arrowClick(direction) {
	switch (direction) {
		case "left":
			index2--;
			if (index2 < 0) {
				index2= slides2.length - 1;
			}
			break;
		case "right":
			index2++;
			if (index2 > slides2.length - 1) {
				index2 = 0;
			}
			break;
		}
		
	ArrowDotCLick(index2)
	}

arrowLeft2.addEventListener("click", () => {
	arrowClick("left");
});
arrowRight2.addEventListener("click", () => {
	arrowClick("right");
});

// Dots click 

for (let i = 0; i < slides.length ; i++) {
	let dot = document.querySelector(`.dot${i}`)
	dot.addEventListener("click", () => {
		ArrowDotCLick(i);
	});
}

console.log(`assets/images/${slides2[index2].image}`)