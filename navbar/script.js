const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active"); // cross animation
    sideMenu.classList.toggle("active");   // slide menu
});