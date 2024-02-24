const visits = document.querySelector(".visits");

let numVisists = Number(localStorage.getItem("numVisits-ls")) || 0;

if (numVisists !== 0){
    visits.textContent = numVisists;
} else{
    visits.textContent = "That is your first visit"
}

numVisists++;

localStorage.setItem("numVisits-ls", numVisists);


