export const createNewsCard = (article) => {
  console.log(article);
  const newsCard = document.createElement("li");
  //newsCard.textContent = article.title;
  newsCard.innerHTML = String.raw`
     <div>
     <img src="${article.media[0]["media-metadata"][0].url}" alt="${article.title}">
     </div>
     <h3>${article.title}</h3>
     
     `;
  return newsCard;
};
