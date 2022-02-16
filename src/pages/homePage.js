import { homePage } from "../views/homePageView.js";

const userInterface = document.querySelector("#app");
const home = homePage();

export const initHomePage = () => {
  userInterface.appendChild(home);
};
