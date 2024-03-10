const url = "https://danieldevamaral.github.io/wdd230/";
const linksURL = "https://danieldevamaral.github.io/wdd230/data/links.json";

const ul = document.querySelector(".activities");

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const li = document.createElement("li");
        const aLinkone = document.createElement("a");
        const aLinktwo = document.createElement("a");

        (week.links).forEach((element, index) => {
            if (index === 0) {
                aLinkone.setAttribute("href", `${element.url}`);
                aLinkone.textContent = `${element.title}`;
            } else if (index === 1) {
                aLinktwo.setAttribute("href", `${element.url}`);
                aLinktwo.textContent = ` | ${element.title}`;
            }
        });

        li.textContent = `${week.lesson}: `;
        li.appendChild(aLinkone);
        li.appendChild(aLinktwo);
        ul.appendChild(li);
    });
};


async function getData() {
    const result = await fetch(linksURL);
    const data = await result.json();
    displayLinks(data.lessons)

}

getData()