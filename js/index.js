// Navigation hide
const navLinks = document.querySelectorAll(".navigation__link");
const checkbox = document.querySelector("#navi-toggle");

navLinks.forEach(link => {
  link.addEventListener('click', () => checkbox.click())
});

//Close popup
const popupClose = document.querySelector(".popup__close");

document.addEventListener('click', (e) => {
  if (e.target.id === 'popup') {
    popupClose.click();
  }
})