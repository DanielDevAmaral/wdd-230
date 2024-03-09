const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

const displayProphets = (element) => {
  element.forEach((element) => {
    const section = document.createElement("section");
    const fullName = document.createElement("h2");
    fullName.textContent = `${element.name}  ${element.lastname}`;
    const portrait = document.createElement("img");
    portrait.setAttribute("src", `${element.imageurl}`);
    portrait.setAttribute("alt", `${element.name}  ${element.lastname}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");
    section.setAttribute("class", "card"),
    section.appendChild(fullName);
    section.appendChild(portrait);
    cards.appendChild(section);
  });
};

async function getData() {
  const result = await fetch(url);
  const data = await result.json();
  //console.table(data)
  displayProphets(data.prophets);
}

getData();
