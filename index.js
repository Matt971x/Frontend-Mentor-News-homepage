const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".icon-menu-close");
const menu = document.querySelector(".menu");

console.log(closeIcon);
menuIcon.addEventListener("click", () => {
  menu.style.width = "70%";
  document.body.classList.toggle("dark-layout");
});

closeIcon.addEventListener("click", () => {
  menu.style.width = "0%";
  document.body.classList.remove("dark-layout");
});
