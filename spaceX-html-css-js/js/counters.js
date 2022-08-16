//1-set variables
//2-function to countUp nums
// -- goal

const section = document.querySelector(".counters");
const nums = document.querySelectorAll(".nums");
let started = false;

function countUp(el) {
  //set the goal value
  let goal = el.dataset.goals;
  //setinterval function to increase value
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => countUp(num));
    }
    started = true;
  } else {
    nums.forEach((num) => {
      num.innerText = 0;
      started = false;
    });
  }
};
