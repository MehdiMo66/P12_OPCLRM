const slides2 = [
  {
    image: "slide4.webp",
  },
  {
    image: "slide5.webp",
  },
  {
    image: "slide6.webp",
  },
  {
    image: "slide7.webp",
  },
  {
    image: "slide8.webp",
  },
];

const banner2 = document.getElementById("carousel2");
let index2 = 0;

const slide2 = document.createElement("img");
slide2.classList.add("banner-img");
slide2.src = `assets/images/${slides2[index2].image}`;
banner2.appendChild(slide2);

// Dots
const dots2 = document.getElementById("dots2");

for (let i = 0; i < slides2.length; i++) {
  let dot2 = document.createElement("span");
  dot2.classList.add("dot2");
  dot2.classList.add(`dot2${i}`);
  dots2.appendChild(dot2);
}

let dotSelected2 = document.querySelector(`.dot2${index2}`);
dotSelected2.classList.add("dot_selected2");

// Arrows
const arrowLeft2 = document.getElementById("angle-left");
const arrowRight2 = document.getElementById("angle-right");

function ArrowDotClick2(index) {
  dotSelected2.classList.remove(`dot_selected2`);
  slide2.src = `assets/images/${slides2[index].image}`;
  dotSelected2 = document.querySelector(`.dot2${index}`);
  dotSelected2.classList.add("dot_selected2");
}

function arrowClick2(direction) {
  switch (direction) {
    case "left":
      index2--;
      if (index2 < 0) {
        index2 = slides2.length - 1;
      }
      break;
    case "right":
      index2++;
      if (index2 > slides2.length - 1) {
        index2 = 0;
      }
      break;
  }

  ArrowDotClick2(index2);
}

arrowLeft2.addEventListener("click", () => {
  arrowClick2("left");
});
arrowRight2.addEventListener("click", () => {
  arrowClick2("right");
});

// Dots click

for (let i = 0; i < slides2.length; i++) {
  let dot2 = document.querySelector(`.dot2${i}`);
  dot2.addEventListener("click", () => {
    ArrowDotClick2(i);
  });
}
