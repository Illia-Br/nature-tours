// Navigation hide
const navLinks = document.querySelectorAll(".navigation__link");
const checkbox = document.querySelector("#navi-toggle");

navLinks.forEach(link => {
  link.addEventListener('click', () => checkbox.click())
});