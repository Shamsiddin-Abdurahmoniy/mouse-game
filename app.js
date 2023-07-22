const spider_img = document.querySelector(".mouse-img");
const counter = document.querySelector(".counter");
const select = document.getElementById("select");
const cat_image = document.getElementById("cat-image");
let innerWidth = window.innerWidth - 50;
let innerHeight = window.innerHeight - 50;

let current_counter = 0;
let easy = 1500;
let medium = 700;
let hard = 600;
let interval;
let time = easy;

document.addEventListener("mousemove", (e) => {
  cat_image.style = `
position:absolute;
left:${e.clientX}px;
top:${e.clientY}px;
`;
});
document.addEventListener("click", (e) => {
  if (e.target.getAttribute("id") == "mouse-image") {
    current_counter++;
    counter.textContent = current_counter;
  }
});

f1();

select.addEventListener("change", (e) => {
  if (select.value == "easy") {
    time == "easy";
  } else if (select.value == "medium") {
    time = medium;
  } else if (select.value == "hard") {
    time = hard;
  }
});

function changeTimer() {
  time;
}

function f1() {
  let top = Math.random() * innerWidth;
  let left = Math.random() * innerHeight;

  spider_img.style = `
  position:absolute;
  left:${top}px;
  top:${left}px;
  transition: 0.4s; 
  `;
  clearInterval(interval);
  changeTimer();
  interval = setInterval(f1, time);
}
