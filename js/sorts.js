import { addPortfolio } from "./photographers.js";

/**
 * Fonction qui trie selon les conditions
 * @param {object} photographer
 * @param {array} mediaFilter
 */

export const addSorts = (photographer, mediaFilter) => {
  const dropdownMenu = document.getElementById("order");
  dropdownMenu.addEventListener("change", function (event) {
    const portfolioContent = document.querySelector(".portfolio__content");
    if (event.target.value === "Popularity") {
      portfolioContent.innerHTML = "";
      sortByPopularity(mediaFilter);
      addPortfolio(photographer, mediaFilter);
    } else if (event.target.value === "Date") {
      portfolioContent.innerHTML = "";
      sortByDate(mediaFilter);
      addPortfolio(photographer, mediaFilter);
    } else if (event.target.value === "Title") {
      portfolioContent.innerHTML = "";
      sortByTitle(mediaFilter);
      addPortfolio(photographer, mediaFilter);
    }
  });
};

/**
 * Filtre les médias par Popularité
 * @param {array} mediaFilter
 * @returns
 */
function sortByPopularity(mediaFilter) {
  mediaFilter.sort((a, b) => b.likes - a.likes);
  return mediaFilter;
}

/**
 * Filtre les médias par Date
 * @param {array} mediaFilter
 */

function sortByDate(mediaFilter) {
  mediaFilter.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
}

/**
 * Filtre les médias par Titre
 * @param {array} mediaFilter
 */

function sortByTitle(mediaFilter) {
  mediaFilter.sort((a, b) => {
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    return 0;
  });
}
