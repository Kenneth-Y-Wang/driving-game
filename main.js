var $carHolder = document.querySelector('.carHolder');
var data = {
  facing: 'east',
  x: 0,
  y: 0,
  speed: 0
};

function turnCar(event) {
  if (event.key === 'ArrowUp') {
    $carHolder.className = 'carHolder north';
    data.facing = 'north';
  } else if (event.key === 'ArrowRight') {
    $carHolder.className = 'carHolder';
    data.facing = 'east';
  } else if (event.key === 'ArrowLeft') {
    $carHolder.className = 'carHolder west';
    data.facing = 'west';
  } else if (event.key === 'ArrowDown') {
    $carHolder.className = 'carHolder south';
    data.facing = 'south';
  }

}

document.addEventListener('keydown', turnCar);
