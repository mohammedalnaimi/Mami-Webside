let ourSkillSection = document.querySelector(".our-skills");
let ourSkillSectionSpans = document.querySelectorAll(".the-progress span");
let scrollToTop = document.querySelector(".scroll-to-top");
let eventInfo = document.querySelector(".events .info");
let eventImage = document.querySelector(".events .image");
let statsSection = document.querySelector(".stats");
let statsSectionNums = document.querySelectorAll(".stats .box .number");
let started = false;

function startCount(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}
// Animate Width On Scrolling
window.onscroll = function () {
  if (window.scrollY >= ourSkillSection.offsetTop - 250) {
    ourSkillSectionSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= statsSection.offsetTop - 250) {
    if (!started) {
      statsSectionNums.forEach((num) => startCount(num))
    }
    started = true
  }
  // Scroll To Top Add Class Name
  if (this.scrollY >= 500) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
};
// Scroll To Top On Click
scrollToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// The End Of The Year Date To Countdown To
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// Make Counter
let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();
  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;
  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
    eventImage.remove();
    eventInfo.remove();
    let newYear = document.querySelector(".newYear");
    let paragrafText = document.createTextNode("Happy New Year 2023");
    newYear.appendChild(paragrafText);
  }
}, 1000);
