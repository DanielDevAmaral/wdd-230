const input = document.querySelector("#favchap");
const but = document.querySelector("button");
const list = document.querySelector("#list");

input.focus();
but.addEventListener("click", () => {
	const li = document.createElement("li");
	const butdel = document.createElement("button");
	li.textContent = input.value;
	butdel.textContent = "❌";
	li.append(butdel);
	list.append(li);
	input.value = "";
	input.focus();

	butdel.addEventListener("click", () => {
		list.removeChild(li);
		input.focus();
	});
});
