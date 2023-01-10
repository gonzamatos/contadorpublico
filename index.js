const navToggle = document.querySelector(".nav-toggle");
const navLink = document.querySelectorAll(".nav-menu-link");
const navMenu = document.querySelector(".nav-menu");

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("nav-menu_visible");
})
})

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

// navLink.addEventListener("click", () => {
//     navMenu.classList.toggle("nav-menu_visible");

//     if (navMenu.classList.contains("nav-menu_visible")) {
//         navToggle.setAttribute("aria-label", "Cerrar menú");
//     } else {
//     navToggle.setAttribute("aria-label", "Abrir menú");
//     }
// });

const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
const itemToggle = this.getAttribute('aria-expanded');

for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
}

if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
}
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));