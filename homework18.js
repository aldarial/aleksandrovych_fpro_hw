const imageNames = ['yellow.jpg', 'red.jpg', 'pink.jpg', 'grey.jpg', 'brown.jpg', 'orange.png',
    'blue.jpg', 'violet.jpg', 'green.jpg'];

const randomIndex = Math.floor(Math.random() * imageNames.length);
const randomImageName = imageNames[randomIndex];
const imagePath = `images/${randomImageName}`;

const imageElement = document.createElement('img');
imageElement.src = imagePath;


document.body.appendChild(imageElement);

