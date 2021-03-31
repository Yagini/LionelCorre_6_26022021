import { createHomepage } from "./homepage.js";
import { createPhotographers } from "./photographers.js";

const links = window.location.href;

if (links.includes("photographers.html")) {
   createPhotographers();
} else {
   createHomepage();
};

