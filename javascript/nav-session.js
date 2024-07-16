const menuSidebar = document.querySelector(".menu-sidebar");
const openMenuSidebarBtn = document.querySelector(".open-menusidebar-btn");
const closeMenuSidebarBtn = document.querySelector(".close-menusidebar-btn");

[openMenuSidebarBtn, closeMenuSidebarBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menuSidebar.classList.toggle("open");
        menuSidebar.style.transition = "transform 0.5s ease";
    })
})

menuSidebar.addEventListener("transitionend", function() {
    this.removeAttribute("style");
})

menuSidebar.querySelectorAll(".dropdown > i").forEach((arrow) => {
    arrow.addEventListener("click", function() {
       this.closest(".dropdown").classList.toggle("active");
    })
})