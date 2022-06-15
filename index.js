const hamburger = document.querySelector(".menu")
const mobMenu = document.querySelector(".mobileMenu")
const links = document.querySelector("m-menu-text")

hamburger.addEventListener("click", () => {
    mobMenu.classList.toggle("active");
    
})
links.addEventListener("click", () => {
    mobMenu.classList.remove("active");
})

