import { createHomepage } from "./homepage.js";
import { createPhotographers } from "./photographers.js";

/*export async function getData() {
  const dataFile = await fetch("../data.json");
  const data = await dataFile.json();
  return data;
}*/

/**
 * Condition qui charge la page demandée en cherchant une inclusion dans l'url
 */
const links = window.location.href;

if (links.includes("photographers.html")) {
  createPhotographers();
} else {
  createHomepage();
}
