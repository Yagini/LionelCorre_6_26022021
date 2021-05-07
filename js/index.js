import { createHomepage } from "./homepage.js";
import { createPhotographers } from "./photographers.js";

/**
 * Fonction asynchrone va attendre le résultat des appels de fonction
 * avec le mot clé await
 * @returns data
 */
async function getData() {
  const dataFile = await fetch("../data.json");
  const data = await dataFile.json();
  return data;
}

/**
 *  La fonction then() execute le code dès que la promesse est résolue
 */

getData().then((data) => {
  const links = window.location.href;

  //Condition qui charge la page demandée en cherchant une inclusion dans l'url
  if (links.includes("photographers.html")) {
    createPhotographers(data);
  } else {
    createHomepage(data);
  }
});
