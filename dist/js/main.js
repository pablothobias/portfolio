const menuBtn = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItem = document.querySelectorAll(".nav-item");

//Estado inicial do menu
let showMenu = false;

console.log('Ei, psiu! Gostou do meu perfil? Entra em contato comigo ;)');
console.log('Tel: 48 991705387 Email: pablo.thobias@gmail.com');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItem.forEach(e => {
      e.classList.add("show");
    });

    showMenu = true;
  } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      menuNav.classList.remove("show");
      menuBranding.classList.remove("show");
      navItem.forEach(e => {
          e.classList.remove("show");
      });

      showMenu = false;
  }
}
