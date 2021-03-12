import {data} from "./data.js"

const photographers = data.photographers;
console.log(photographers);
const photographersSection = document.querySelector(".photographers");

photographers.forEach(photographer => {
    const photographersCard = document.createElement("article");
    photographersCard.classList.add("photographers__card");
    
    const photographersCity = document.createElement("p");
    photographersCity.classList.add("photographers__city");
    photographersCity.textContent = photographer.city;
    
    const photographersFrame = document.createElement("div");
    photographersFrame.classList.add("photographers__frame");

    const photographersLink = document.createElement("a");
    photographersLink.href = "../photographes.html";
    photographersLink.classList.add("photographers__link");

    const photographersName = document.createElement("h2");
    photographersName.classList.add("photographers__name");
    photographersName.textContent = photographer.name;
    
    const photographersPhoto = document.createElement("img");
    photographersPhoto.src = photographer.portrait;
    
    const photographersPrice = document.createElement("p");
    photographersPrice.classList.add("photographer__price");
    photographersPrice.textContent = photographer.price;
    
    const photographersTagline = document.createElement("p");
    photographersTagline.classList.add("photographers__tagline");
    photographersTagline.textContent = photographer.tagline;

    const photographersTags = document.createElement("ul");
    photographersTags.classList.add("tag");
    photographers.forEach ( tag => {
        const tags = document.createElement("li");                
        tags.textContent = tag.tags;
        photographersTags.appendChild(tags);       
    })

    photographersSection.appendChild(photographersCard);
    
    photographersCard.appendChild(photographersLink);
    photographersCard.appendChild(photographersCity);
    photographersCard.appendChild(photographersTagline);
    photographersCard.appendChild(photographersPrice);
    photographersCard.appendChild(photographersTags);

    photographersLink.appendChild(photographersFrame);
    
    photographersFrame.appendChild(photographersPhoto);
    photographersFrame.appendChild(photographersName);
});