export const homePage = () => {
  const homePage = document.createElement("div");
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  homePage.innerHTML = String.raw`
      <h1>Home Page!!!</h1>
    `;

  return homePage;
};
