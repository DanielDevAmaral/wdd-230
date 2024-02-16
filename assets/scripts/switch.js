const topp = document.querySelector(".top");
const switchbt = document.createElement("div");
const main = document.querySelector("main");
const title = document.querySelector("main h2");
const li = document.querySelector("li");
const a = document.querySelectorAll("li a");
const card = document.querySelectorAll(".card");

switchbt.textContent = "🌑";
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
		title.style.background = "#14213D";
		title.style.color = "#fff";
		switchbt.textContent = "🟡";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		switchbt.textContent = "🌑";
		a.forEach(element => {
			element.style.color = "#0047AB";
			element.style.textDecoration = "none";
		});
		card.forEach(element => {
			element.style.background = "#fff"
			element.style.borderRadius = "0px"
		});
		title.style.background = "#EEEEEE";
		title.style.color = "#000";
	}
});
topp.append(switchbt);
