function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // add and remove the open css rule
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}