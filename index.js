const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".icon-menu-close");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menu.style.display = "block";
  document.body.classList.toggle("dark-layout");
});

closeIcon.addEventListener("click", () => {
  menu.style.display = "none";
  document.body.classList.remove("dark-layout");
});
