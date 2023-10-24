const output = document.querySelector("#name-output");
const input = document.querySelector("#name-input");


input.addEventListener ("input", nameInput)

function nameInput (event) {
 output.textContent = event.currentTarget.value;
 if (event.currentTarget.value === "") {
    output.textContent = "Anonymous"
 };
}