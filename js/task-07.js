const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", fontSizeChange);


function fontSizeChange(event){
  const rangeEl = event.currentTarget.value + "px" ;
  textEl.style.fontSize = rangeEl;
//textEl.style.fontSize = `${rangeEl}px`;
 };