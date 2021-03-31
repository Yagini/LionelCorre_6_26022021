import { data } from "./data.js";

const createHomepage = () => {

const photographersData = data.photographers;
const homepageSection = document.querySelector(".photographers");

photographersData.forEach((photographer) => { 

  const photographersCard = document.createElement("article");
  photographersCard.classList.add("photographers__card");

  const photographersCity = document.createElement("p");
  photographersCity.classList.add("photographers__city");
  photographersCity.textContent = photographer.city;

  const photographersFrame = document.createElement("div");
  photographersFrame.classList.add("photographers__frame");

  const photographersLink = document.createElement("a");
  photographersLink.href = "../photographers.html?id=" + photographer.id;
  photographersLink.classList.add("photographers__link");  

  const photographersName = document.createElement("h2");
  photographersName.classList.add("photographers__name");
  photographersName.textContent = photographer.name;

  const photographersPhoto = document.createElement("img");
  photographersPhoto.classList.add("photographers__portrait");
  photographersPhoto.src = "./images/Photos/Photographers_ID_Photos/" + photographer.portrait;

  const photographersPrice = document.createElement("p");
  photographersPrice.classList.add("photographers__price");
  photographersPrice.textContent = photographer.price;

  const photographersTagline = document.createElement("p");
  photographersTagline.classList.add("photographers__tagline");
  photographersTagline.textContent = photographer.tagline;

  const photographersTags = document.createElement("ul"); 
  photographersTags.classList.add("tag") 
  
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
};

export { createHomepage };