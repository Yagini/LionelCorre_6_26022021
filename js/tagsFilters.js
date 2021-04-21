import { createHomepage } from "./homepage.js";

export const tagsFilters = function (photographers) {
  const currentUrl = window.location.href;
  const homepageSection = document.querySelector(".photographers");    
  const selectedTags = []
  const tags = photographers.filter(function(photographers) {    
    if (photographers.tags != "portrait") {
      return true;
    };
    if (photographers.tags === "art") {
      return false;
    }  
  });
  selectedTags.push(tags) 
  console.log(selectedTags);

  if (currentUrl.includes("portrait")) {
    homepageSection.innerHTML = "";
    
    createHomepage()
  }
  if (currentUrl.includes("art")) {
    homepageSection.innerHTML = "";
    createHomepage()
  }
  if (currentUrl.includes("fashion")) {
    homepageSection.innerHTML = "";
    createHomepage()
  }
  if (currentUrl.includes("architecture")) {
    homepageSection.innerHTML = "";
    createHomepage()
  }
  if (currentUrl.includes("travel")) {
    homepageSection.innerHTML = "";
    createHomepage()
  }
  if (currentUrl.includes("sport")) {
    homepageSection.innerHTML = "";
    createHomepage()
  }
  if (currentUrl.includes("animals")) {
    homepageSection.innerHTML = "";
    createHomepage()
  }
  if (currentUrl.includes("events")) {
    homepageSection.innerHTML = "";
    createHomepage()
  }
};
