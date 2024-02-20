const header = document.querySelector(".top")
const events = document.querySelector(".card-events h3")
const weather = document.querySelector(".card-weather h3")
const company = document.querySelectorAll(".card-company h3")
const footer = document.querySelector("footer")
const nav = document.querySelector(".navigation")
const main = document.querySelector("main")
const cards = document.querySelector(".spotlights-cards")
const checkbox = document.querySelector('input[type="checkbox"]');
const pic = document.querySelector("picture");

//#A9A9A9 grey

checkbox.addEventListener("click", function() {
    if (checkbox.checked) {
		main.style.background = "#333";
		cards.style.background = "#333";
		header.style.background = "#662549";
		pic.style.background = "#333";
		nav.style.background = "#662549";
		footer.style.background = "#662549";
		events.style.background = "#662549";
		events.style.color = "#fff"
		weather.style.background = "#662549";
		weather.style.color = "#fff"
		company.forEach(element => {
			element.style.background = "#662549";
			element.style.color = "#fff"
		});

	} else if(!checkbox.checked) {
		main.style.background = "#fff";
		cards.style.background = "#fff";
		header.style.background = "#264653";
		nav.style.background = "#264653";
		footer.style.background = "#264653";
		events.style.background = "#e9c46a";
		events.style.color = "#1a3947"
		weather.style.background = "#e9c46a";
		weather.style.color = "#1a3947"
		company.forEach(element => {
			element.style.background = "#e9c46a";
			element.style.color = "#1a3947"
		});
		pic.style.background = "#fff";


	}
});

