/**
 *  Filtres du dropdownMenu
 *
 */
import { addPortfolio } from "./photographers.js";

export const addfilters = (mediaFilter) => {
 
  const dropdownMenu = document.getElementById("order");  
  dropdownMenu.addEventListener("change", function(event){    
    const portfolioContent = document.querySelector(".portfolio__content")
    if (event.target.value === "Popularity") {
      portfolioContent.innerHTML = "";
      sortByPopularity
      const newPopularity = mediaFilter;                  
      portfolioContent.innerHTML = newPopularity;
    }
    if (event.target.value === "Date") {
      portfolioContent.innerHTML = "";
      sortByDate
      const newDate = mediaFilter;
      portfolioContent.innerHTML = newDate;
    }
    if (event.target.value === "Title") {
      portfolioContent.innerHTML = "";
      sortByTitle;      
      const newTitle = mediaFilter;
      addPortfolio;
      portfolioContent.innerHTML = addPortfolio();
    }
      
  });  
  // inner html gallery " "
  // function qui display la galerie et qui prend le nouveau tableau en paramètre
};

const sortByPopularity = function (mediaFilter) {
  mediaFilter.sort((a, b) => a.likes - b.likes);
  return mediaFilter;      
};

const sortByDate = function (mediaFilter) {
  mediaFilter.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  }); 
};

const sortByTitle = function (mediaFilter) {
  mediaFilter.sort((a, b) => {
    if (a.alt.toLowerCase() > b.alt.toLowerCase()) {
      return 1;
    }
    if (a.alt.toLowerCase() < b.alt.toLowerCase()) {
      return -1;
    }
    return 0;
  });  
};


