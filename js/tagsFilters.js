import { createHomepage } from "./homepage.js";
import { data } from "./data.js";

export const tagsFilters = function (photographers) {
  const currentUrl = window.location.href;
  const homepageSection = document.querySelector(".photographers");
  
  console.log(currentUrl);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const tagsParams = urlParams.get("tags");
  console.log(tagsParams);
 
const filters = photographers.filter((filter) => filter.tags === tagsParams)
for (let properties in photographers) {
  console.log(photographers[properties.tags]);
}

};