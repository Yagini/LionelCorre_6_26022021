/**
 *  Filtres du dropdownMenu
 *
 */
import { addPortfolio } from "./photographers.js";

export const addfilters = (photographer, mediaFilter) => {
  const dropdownMenu = document.getElementById("order");
  dropdownMenu.addEventListener("change", function (event) {
    const portfolioContent = document.querySelector(".portfolio__content");
    if (event.target.value === "Popularity") {
      portfolioContent.innerHTML = "";
      sortByPopularity(mediaFilter);
      console.log(mediaFilter);
      addPortfolio(photographer, mediaFilter);
    } else if (event.target.value === "Date") {
      portfolioContent.innerHTML = "";
      sortByDate(mediaFilter);
      console.log(mediaFilter);
      addPortfolio(photographer, mediaFilter);
    } else if (event.target.value === "Title") {
      portfolioContent.innerHTML = "";
      sortByTitle(mediaFilter);
      console.log(mediaFilter);
      addPortfolio(photographer, mediaFilter);
    };
  });
};

function sortByPopularity(mediaFilter) {
  mediaFilter.sort((a, b) => a.likes - b.likes);
  return mediaFilter;
};

function sortByDate(mediaFilter) {
  mediaFilter.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
};

function sortByTitle(mediaFilter) {
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
