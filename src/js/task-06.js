// const inputEl = document.querySelector("#validation-input");
// const inputLength = 6;
// const valValid = "green";
// const valInvalid = "red";

// input.addEventListener("blur", focusChange)

// function focusChange(event) {
    
//   if(event.currentTarget.value.length === inputLength) {
//      input.style.borderColor = valValid
//   }
//   else {
//     input.style.borderColor = valInvalid;
//   };
// }

const inputEl = document.querySelector("#validation-input");
const inputLength = 6;

inputEl.addEventListener("blur", focusChange);

function focusChange (event) {
   const inputValue = event.currentTarget.value;

   inputEl.classList.remove("valid", "invalid");

   if(inputValue.length === inputLength) {
     inputEl.classList.add("valid")
   }
   else {
    inputEl.classList.add("invalid")
   }
};