const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".icon-menu-close");
const menu = document.querySelector(".menu");

console.log(closeIcon);
menuIcon.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
  document.body.classList.toggle("dark-layout");
});

closeIcon.addEventListener("click", () => {
  menu.style.transform = "translateX(100%)";
  document.body.classList.remove("dark-layout");
});
