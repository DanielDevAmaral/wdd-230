const url = "https://danieldevamaral.github.io/wdd230/";
const linksURL = "https://yourgithubusername.github.io/wdd230/data/links.json";

async function getData() {
    const result = await fetch(url);
    const data = await result.json();
    console.table(data)
  }
