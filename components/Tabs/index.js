// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(result => {
  const { topics } = result.data;
  const tabTopics = document.querySelector('.topics');
  tabTopics.appendChild(Tab('all')); // handle all topics
  for (const topic of topics) tabTopics.appendChild(Tab(topic));
});

function Tab(topic) {
  // create the tab
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = topic;

  // store live collection of card
  const cards = document.getElementsByClassName('card');

  // handle edge cases
  if (topic === 'node.js') topic = 'node';

  // add tab event to filter cards
  tab.addEventListener('click', () => {
    for (const card of cards) {
      card.style.display = topic === 'all' ? 'block'
        : topic === card.dataset.topic ? 'block' : 'none';
    }
  });

  // return the new component
  return tab;
}
