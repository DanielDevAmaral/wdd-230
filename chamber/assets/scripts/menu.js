const button = document.querySelector("#menu");
const navigation = document.querySelector(".navigation"); // Renamed 'nav' to 'navigation'
const aElement = document.querySelectorAll("a");

button.addEventListener("click", () => {
    button.classList.toggle("open");
    navigation.classList.toggle("open"); // Changed 'nav' to 'navigation'
    aElement.forEach(element => {
        element.classList.toggle("open");
    });
});
