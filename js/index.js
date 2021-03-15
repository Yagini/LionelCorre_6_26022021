import { fisheyesHomepage} from "./homepage.js";
import { photographersfunctions } from "./photographers.js";

console.log(fisheyesHomepage);
console.log(photographersfunctions);


// 1- condition pour la création de la page concernant le photographe selectionner
        // cette fonction est à déclarer ici ou directement dans homepage.js???


// Si je clique sur la première image (mimi keel)
    // alors créer moi la page du photographe avec l'id correspondant
// sinon si je clique sur la 2eme image 
    // alors créer moi la page du photographe avec l'id correspondant
//.....
// else erreur 404



// 2- même question pour les photos de data.js media de chaque photographe
        // fonction à déclarer dans photographers.js

        
// si id est égal a celui du photographe 
    //alors charge toutes les photos de media qui possèdent le bon id
// ...






// 4- pour les tags, il me charge le tableau en d'élément en 1x.
// comment faudrait il procédé? (cf: photographers.js => 30 à 32)





// 5 -dans la console il y a une erreur  "Cannot read property 'appendChild' of null"
// sur les 2 pages










































/*const photographers = data.photographers;
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
});*/