const button = document.querySelector("#menu");
const nav = document.querySelector(".navigation");
const aElement = document.querySelectorAll("a")

button.addEventListener("click", () => {
    button.classList.toggle("open");
    nav.classList.toggle("open");
    aElement.forEach(element => {
        element.classList.toggle("open");
    });

})