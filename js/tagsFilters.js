import { createHomepage } from "./homepage.js";

export const tagsFilters = function (photographers) {
  const currentUrl = window.location.href;
  const homepageSection = document.querySelector(".photographers");    
  const selectedTag = "portrait"


  /*const tagsss = () => {
    photographers.forEach( tag => {
      if (tag.includes(portrait)) {
        return tagsss;
      }
    });
  }
  console.log(tagsss);*/
  const filtersPhotographers = photographers.filter(function(tag) {
   // filtre regarde si la liste de tag de chaque photographe inclus selectedTag
  });

  selectedTags.push(tags) 
  console.log(selectedTags);

  if (currentUrl.includes("portrait")) {
    homepageSection.innerHTML = "";
    
    createHomepage()
  }
  
};
