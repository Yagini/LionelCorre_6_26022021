import { createHomepage } from "./homepage.js";

export const tagsFilters = function (photographers) {
  const currentUrl = window.location.href;
  const homepageSection = document.querySelector(".photographers");    
  const selectedTags = []
  const tagsss = () => {
    photographers.forEach( tag => {
      if (tag.includes(portrait)) {
        return tagsss;
      }
    });
  }
  console.log(tagsss);
  const tags = photographers.filter(function(tag) {});

  selectedTags.push(tags) 
  console.log(selectedTags);

  if (currentUrl.includes("portrait")) {
    homepageSection.innerHTML = "";
    
    createHomepage()
  }
  
};
