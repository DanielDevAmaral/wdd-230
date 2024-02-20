const topp = document.querySelector(".top");
const switchbt = document.createElement("div");
const main = document.querySelector("main");
const title = document.querySelector("main h2");
const li = document.querySelector("li");
const a = document.querySelectorAll("li a");
const card = document.querySelectorAll(".card");
const body = document.querySelector("body")

switchbt.textContent = "🌑 Dark Mode";
switchbt.style.color = "#fff"
switchbt.classList.add("switch-button");


switchbt.addEventListener("click", function() {
    if (switchbt.textContent.includes("🌑")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		a.forEach(element => {
			element.style.color = "#fff";
			element.style.textDecoration = "underline";
		});
		card.forEach(element => {
			element.style.background = "#ffffff33"
			element.style.borderTopLeftRadius  = "20px"
		});
		switchbt.textContent = "🟡 Light Mode";
		switchbt.style.color = "#fff"
	} else {
		main.style.color = "#000";
		switchbt.textContent = "🌑 Dark Mode";
		switchbt.style.color = "#fff"
		a.forEach(element => {
			element.style.color = "#0047AB";
			element.style.textDecoration = "none";
		});
		card.forEach(element => {
			element.style.background = "#fff"
			element.style.borderRadius = "0px"
		});
		body.style.background = "#000000"
		body.style.opacity = "0.7"


	}
});
topp.append(switchbt);
