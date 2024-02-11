const input = document.querySelector("#favchap");
const but = document.querySelector("button");
const list = document.querySelector("#list");

input.focus();


function listManager() {
  but.addEventListener("click", () => {
    const li = document.createElement("li");
    const butdel = document.createElement("button");
    li.textContent = input.value;
    butdel.textContent = "❌";
    li.append(butdel);
    list.append(li);

    butdel.addEventListener("click", () => {
      list.removeChild(li);
      input.focus();
      input.value = "";
    });
  });
}


input.onkeydown = function (event) {
  if (event.code === "Enter") {
    listManager()
  }
};
