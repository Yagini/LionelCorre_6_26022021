import { data } from "./data.js";
//import { tagsFilters } from "./tagsFilters.js";


const createHomepage = () => {
  const popUp = document.querySelector(".pop-up");

  /**
   * Fonction d'écoute qui gère l'apparition et
   * la disparition du petit encart PopUp qui ramène en haut de page
   */
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
      popUp.style.display = "flex";
    } else {
      popUp.addEventListener("click", function () {
        popUp.style.display = "none";
      });
    }
  });
  
  
  const photographersData = data.photographers;
  for (let i = 0; i < photographersData.length; i++) {
    console.log(photographersData[i].tags);
  } 
  const homepageSection = document.querySelector(".photographers");

  /**
   * Création de la page index html
   */
  photographersData.forEach((photographer) => {
    const photographersCard = document.createElement("article");
    photographersCard.classList.add("photographers__card");

    const photographersCity = document.createElement("p");
    photographersCity.classList.add("photographers__city");
    photographersCity.textContent = photographer.city;

    const photographersFrame = document.createElement("div");
    photographersFrame.classList.add("photographers__frame");

    const photographersLink = document.createElement("a");
    photographersLink.href = "./photographers.html?id=" + photographer.id;
    photographersLink.classList.add("photographers__link");
    photographersLink.setAttribute("aria-label", photographer.name);

    const photographersName = document.createElement("h2");
    photographersName.classList.add("photographers__name");
    photographersName.textContent = photographer.name;

    const photographersPhoto = document.createElement("img");
    photographersPhoto.classList.add("photographers__portrait");
    photographersPhoto.src = "./images/Photos/Photographers_ID_Photos/" + photographer.portrait;
    photographersPhoto.alt = "";

    const photographersPrice = document.createElement("p");
    photographersPrice.classList.add("photographers__price");
    photographersPrice.textContent = photographer.price;

    const photographersTagline = document.createElement("p");
    photographersTagline.classList.add("photographers__tagline");
    photographersTagline.textContent = photographer.tagline;

    const photographersTags = document.createElement("ul");
    photographersTags.classList.add("tag");

    photographer.tags.forEach((tag) => {
      const tagList = document.createElement("li");
      tagList.classList.add("tag__li");
      tagList.textContent = tag;
      photographersTags.appendChild(tagList);
    });

    homepageSection.appendChild(photographersCard);

    photographersCard.appendChild(photographersLink);
    photographersCard.appendChild(photographersCity);
    photographersCard.appendChild(photographersTagline);
    photographersCard.appendChild(photographersPrice);
    photographersCard.appendChild(photographersTags);

    photographersLink.appendChild(photographersFrame);

    photographersFrame.appendChild(photographersPhoto);

    photographersLink.appendChild(photographersName);
  });

  // fonction qui filtre selon le tag sélectionner
  /*tagsFilters()*/
};

export { createHomepage };
