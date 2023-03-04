// import {
//   getRandomNumber,
//   getDistance,
//   getDistanceHint



// Coordenadas del tesoro
const WIDTH = 400;
const HEIGH = 400;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};

// Controlador del click
let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 20 ) {
    alert(`¡¡¡Felicitaciones!!! 
¡Has detectado la amenaza informática en ${clicks} clicks!`);
    location.reload();
  }
});

