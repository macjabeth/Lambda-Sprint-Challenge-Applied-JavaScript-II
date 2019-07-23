/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  // create the carousel
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  // store carousel index
  let index = 0;

  // add left button
  const leftBtn = document.createElement('div');
  leftBtn.classList.add('left-button');
  leftBtn.textContent = '<';
  carousel.appendChild(leftBtn);

  // add left btn event listner
  leftBtn.addEventListener('click', () => {
    // hide the current image
    images[index].style.visibility = 'hidden';
    images[index].style.opacity = 0;

    // cycle the index
    index = index === 0 ? images.length - 1 : --index;

    // display the new image
    images[index].style.visibility = 'visible';
    images[index].style.opacity = 1;
  });

  // collect images
  const paths = [
    './assets/carousel/mountains.jpeg',
    './assets/carousel/computer.jpeg',
    './assets/carousel/trees.jpeg',
    './assets/carousel/turntable.jpeg'
  ];

  const images = paths.map(path => {
    const img = document.createElement('img');
    img.src = path;
    return img;
  });

  // display first image in rotation
  images[index].style.visibility = 'visible';
  images[index].style.opacity = 1;

  // add images to the carousel
  for (const img of images) carousel.appendChild(img);

  // add right button
  const rightBtn = document.createElement('div');
  rightBtn.classList.add('right-button');
  rightBtn.textContent = '>';
  carousel.appendChild(rightBtn);

  // add right btn event listner
  rightBtn.addEventListener('click', () => {
    // hide the current image
    images[index].style.visibility = 'hidden';
    images[index].style.opacity = 0;

    // cycle the index
    index = index === images.length - 1 ? 0 : ++index;

    // display the new image
    images[index].style.visibility = 'visible';
    images[index].style.opacity = 1;
  });

  // return the new component
  return carousel;
}

const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.appendChild(Carousel());
