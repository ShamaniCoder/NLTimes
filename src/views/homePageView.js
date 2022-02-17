export const homePage = () => {
  const homeView = document.createElement("div");
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  homeView.innerHTML = String.raw`
      <h1 class="home__title">Home Page!!!</h1>
      <ul class="home__news"></ul>
    `;
  return homeView;
};
