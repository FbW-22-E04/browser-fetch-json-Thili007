// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
import { recipeData } from "./data.js";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

let parsedData = JSON.parse(recipeData);

Object.entries(parsedData).forEach((entryCards) => {
  const sections = [
    document.getElementById("cakes"),
    document.getElementById("biscuits"),
    document.getElementById("bread"),
  ];
  entryCards[1].map((card) => {
    sections.forEach((section) => {
      if (card.type === section.id) {
        let cardDetails = `<div class="card m-3" style="width: 18rem;">
               <img src="${
                 card.image
               }" class="card-img-top" alt="Baked Goods" height="200rem">
               <div class="card-body">
                 <h4 class="card-title">${card.title}</h4>
                 <h6>${card.author}<h6>
                 <p class="border-top border-secondary pt-2">Ingredients: ${card.ingredients.join(
                   ", "
                 )}</p>
               </div>
             </div>`;
        section.insertAdjacentHTML("afterbegin", cardDetails);
      }
    });
  });
});
