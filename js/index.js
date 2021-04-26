import { createHomepage } from "./homepage.js";
import { createPhotographers } from "./photographers.js";

/**
 * Condition qui charge la page demandée en cherchant une inclusion dans l'url
 */
const links = window.location.href;

if (links.includes("photographers.html")) {
  createPhotographers();
} else {
  createHomepage();
}
