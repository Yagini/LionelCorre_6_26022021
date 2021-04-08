/**
 *  Filtres du dropdownMenu
 *
 */

export const addfilters = (mediaFilter) => {
  //const popularity = document.querySelector(".dropdPopularity");
  //const date = document.querySelector(".dropdDate");
  //const title = document.querySelector(".dropdTitle");
  //popularity.addEventListener("click", sortByPopularity(mediaFilter));
  //date.addEventListener("click", sortByDate(mediaFilter));
  //title.addEventListener("click", sortByTitle(mediaFilter)); 
  sortByPopularity(mediaFilter)
  // inner html gallery " "
  // function qui display la galerie et qui prend le nouveau tableau en paramètre
};

const sortByPopularity = function (mediaFilter) {
  mediaFilter.sort((a, b) => a.likes - b.likes); 
  console.log(mediaFilter)     
  //renvoie le tableau 

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

/*export const tagsFilters = function () {
  
  // fonction qui display tou
  
  
  console.log(selectedTags);
};*/
