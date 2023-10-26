const output = document.querySelector("#name-output");
const input = document.querySelector("#name-input");


input.addEventListener ("input", nameInput)

function nameInput (event) {
 output.textContent = event.currentTarget.value;
 if (event.currentTarget.value.trim() === "") {
    output.textContent = "Anonymous"
 };
}

//.trim() removes leading and trailing whitespaces