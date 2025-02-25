const body = document.querySelector("body");
const swetchBtn = document.querySelector(".swetch-btn");
const imgIcon = document.querySelector(".img-icon");

swetchBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  imgIcon.classList.toggle("sun", !body.classList.contains("dark"));
  imgIcon.classList.toggle("moon", body.classList.contains("dark"));
});
