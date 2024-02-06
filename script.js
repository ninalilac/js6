"use strict";

// ---- 1
 
const burgerBar = document.querySelector(".burger")
const navMenuBar = document.querySelector(".navMenu")

burgerBar.addEventListener("click", () => {
    burgerBar.classList.toggle("active");
    navMenuBar.classList.toggle("active");
})


document.querySelectorAll(".navLink").forEach(n => n.
    addEventListener("click", () => {
        burgerBar.classList.remove("active");
        navMenuBar.classList.remove("active");
    }))




    