let stadium = document.querySelector(".stadium");
let ball = document.getElementsByClassName("border")[0];
ball.addEventListener("click", (e) => {});
stadium.addEventListener("mousedown", (e) => {
  console.log(e.clientX, e.clientY);
  console.log(e.pageX, e.pageY);
  ball.style.cssText = `transform: translate(${
    e.pageX - stadium.offsetLeft - ball.clientWidth / 2
  }px,${e.pageY - stadium.offsetTop - ball.clientHeight / 2}px)`;
});
