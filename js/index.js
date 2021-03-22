import { createHomepage } from "./homepage.js";
import { createPhotographers } from "./photographers.js";

const links = window.location.href;
console.log(links);

if (links.includes("photographers.html")) {
   createPhotographers();
} else {
   createHomepage();
}


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

// 5 -dans la console il y a une erreur  "Cannot read property 'appendChild' of null"
// sur les 2 pages*/
