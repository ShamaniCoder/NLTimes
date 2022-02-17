import { homePage } from "../views/homePageView.js";
import { createNewsCard } from "../views/newsCardView.js";

const API_KEY = "w59cp4CuRgbRZgXPGHLNUZE6FVRNhwC0";
const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;

const userInterface = document.querySelector("#app");

export const initHomePage = () => {
  const home = homePage();
  userInterface.appendChild(home);
  const newsList = document.querySelector(".home__news");
  showNews(newsList);
};

const showNews = (newsList) => {
  fetchNews(url).then((data) => {
    data.results.forEach((article) => {
      const newsCard = createNewsCard(article);
      newsList.appendChild(newsCard);
    });
  });
};

const fetchNews = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error occurs when fetching most popular news");
      }
      return response.json();
    })
    .then((data) => data);
};
