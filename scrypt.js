const main = document.querySelector("main");
const article = document.querySelector("article");

const requestUrl = "./package.json";

const request = new XMLHttpRequest();

request.open("Get", requestUrl);
request.responseType= "json";
request.send();

request.onload = function() {
    let photographers = request.response;
    populateArticle(photographers);
    showArticle(photographers);
}