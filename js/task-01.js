const categoriesElem = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesElem.length}`);

categoriesElem.forEach((element, index) => {
   const title = element.querySelector("h2");
   console.log("");
   console.log(`Category: ${title.textContent}`);
   const liItem = element.querySelectorAll("li");
   console.log(`Elements: ${liItem.length}`);
});

