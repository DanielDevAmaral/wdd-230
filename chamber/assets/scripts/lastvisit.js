const visits = document.querySelector(".visits");

let numVisists = Number(localStorage.getItem("numVisits-ls")) || 0;

const lastVisit = localStorage.getItem("lastVisit");

if (lastVisit) {
  const daysPassed = Math.floor(
    (Date.now() - lastVisit) / (1000 * 60 * 60 * 24)
  );
  if (daysPassed > 0) {
    document.getElementById(
      "visit-message"
    ).textContent = `You last visited ${daysPassed} days ago.`;
  } else if (daysPassed == 1) {
    document.getElementById(
      "visit-message"
    ).textContent = `You last visited ${daysPassed} day ago.`;
  } else if (numVisists > 1 && daysPassed == 0) {
    document.getElementById(
      "visit-message"
    ).textContent = `Back so soon! Awesome!`;
  } else {
    document.getElementById(
      "visit-message"
    ).textContent = `Welcome! Let us know if you have any questions`;
  }
}
localStorage.setItem("lastVisit", Date.now());
localStorage.setItem("numVisits-ls", numVisists);
