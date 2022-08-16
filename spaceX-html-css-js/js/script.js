const menuBtn = document.querySelector("#menu-btn");
const overlay = document.querySelector("#overlay");
const mobilMenu = document.querySelector("#mobile-menu");
const counters = document.querySelectorAll(".counter");
const counterSection = document.querySelector(".counting");
let started = false; //function started ? no

// console.log(counterSection.offsetTop);//666

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  mobilMenu.classList.toggle("show-menu");
});

// //scroll
window.onscroll = function () {
  if (window.scrollY >= 100) {
    if (!started) {
      counters.forEach((counter) => startCount(counter));
    }
    started = true;
  } else {
    reset();
  }
};

//start counting
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}
//reset
function reset() {
  counters.forEach((count) => {
    count.innerText = 0;
    started = false;
  });
}

// =======================another way===================
// function countUp() {
//   counters.forEach((counter) => {
//     counter.innerText = "0";
//     const updateCounter = () => {
//       //get target
//       const target = +counter.getAttribute("data-target"); //+ to convert string to number
//       //get current value
//       const currentValue = +counter.innerText;
//       //increment for each  counter
//       let increment = target / 10;

//       if (currentValue < target) {
//         counter.innerText = `${Math.ceil(currentValue + increment)}`;
//         setTimeout(updateCounter, 75);
//       } else {
//         counter.innerText = target;
//       }
//     };
//     updateCounter();
//   });
// }

// window.addEventListener("scroll", scrollPage);
// function scrollPage() {
//   let scrollPosition = window.scrollY;
//   // console.log(scrollPosition);
//   if (scrollPosition > 100 && !isStarted) {
//     countUp();
//     isStarted = true;
//   } else if (scrollPosition < 100 && isStarted) {
//     reset();
//     isStarted = false;
//   }
// }

// function reset() {
//   counters.forEach((counter) => (counter.innerHTML = "0"));
// }
