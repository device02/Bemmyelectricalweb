const hamburger = document.getElementById("hamburger");
const topnav = document.getElementById("topnav");
const navLinks = document.querySelectorAll("#topnav a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    topnav.classList.toggle("show");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        topnav.classList.remove("show");
    });
});