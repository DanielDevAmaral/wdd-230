const button = document.querySelector(".mobile");
const navigation = document.querySelector(".link"); 
const aElement = document.querySelectorAll("a");

button.addEventListener("click", () => {
    button.classList.toggle("open");
    navigation.classList.toggle("open"); 
    aElement.forEach(element => {
        element.classList.toggle("open");
    });
});
