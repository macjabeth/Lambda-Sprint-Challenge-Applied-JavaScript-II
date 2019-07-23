// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(result => {
    const { articles } = result.data;
    const topics = Object.keys(articles);
    const cardsContainer = document.querySelector('.cards-container');
    for (const topic of topics) {
      for (const article of articles[topic]) {
        cardsContainer.appendChild(Card(article));
      }
    }
  });

function Card(article) {
  // create the card
  const card = document.createElement('div');
  card.classList.add('card');

  // add the headline
  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = article.headline;
  card.appendChild(headline);

  // create author
  const author = document.createElement('div');
  author.classList.add('author');

  // add image to author
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  imgContainer.classList.add('img-container');
  img.src = article.authorPhoto;
  imgContainer.appendChild(img);
  author.appendChild(imgContainer);

  // add name attribution to author
  const name = document.createElement('span');
  name.textContent = article.authorName;
  author.appendChild(name);

  // add author to card
  card.appendChild(author);

  // return the new component
  return card;
}
