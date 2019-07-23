// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  // create the header
  const header = document.createElement('div');
  header.classList.add('header');

  // add a date
  const date = document.createElement('span');
  date.classList.add('date');
  date.textContent = Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date()).toUpperCase();
  header.appendChild(date);

  // add a title
  const title = document.createElement('h1');
  title.textContent = 'Lambda Times';
  header.appendChild(title);

  // add the temperature
  const temp = document.createElement('span');
  temp.classList.add('temp');
  temp.textContent = '98°';
  header.appendChild(temp);

  // return the new component
  return header;
}

document.querySelector('.header-container').appendChild(Header());
