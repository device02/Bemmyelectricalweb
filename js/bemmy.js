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




const services = document.querySelectorAll(".scrolls");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }

    });

}, {
    threshold: 0.2
});

services.forEach(service => {
    observer.observe(service);
});




