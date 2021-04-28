/*import { createHomepage } from "./homepage.js";
import { data } from "./data.js";
import { createPhotographers } from "./photographers.js";

export const tagsFilters = function () {
  const currentUrl = window.location.href;
  const homepageSection = document.querySelector(".photographers");
  
  console.log(currentUrl);

  const currentLink = window.location.href;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const tagsParams = urlParams.get("tags");
  console.log(tagsParams);
 
  

}

const selectedTag = ""
const arrayTags = [
  "portrait",
  "art",
  "mode",
  "architecture",
  "voyage",
  "sport",
  "animaux",
  "evenements",
];

if (selectedTag === "") {
  createHomepage()
}
if (tagsParams === "portrait") {
  homepageSection.innerHTML = " ";

}*/


/* charges une page, 
au chargement tu construis son contenu à partir de données (un tableau de photographes). 

SI dans les paramètres de ta page, tu n'as pas de tag, 
tu boucles sur l'ensemble des photographes à la création,

SINON tu filtres les données pour ne boucler que sur les photographes qui ont le tag */