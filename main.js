var $carHolder = document.querySelector('.carHolder');
var data = {
  facing: 'east',
  x: 0,
  y: 0,
  speed: 0
};
var timeId = null;
var movement = 0;

function turnCar(event) {
  if (event.key === 'ArrowUp') {
    $carHolder.className = 'carHolder north';
    data.facing = 'north';
    movement = 0;
  } else if (event.key === 'ArrowRight') {
    $carHolder.className = 'carHolder';
    data.facing = 'east';
    movement = 0;
  } else if (event.key === 'ArrowLeft') {
    $carHolder.className = 'carHolder west';
    data.facing = 'west';
    movement = 0;
  } else if (event.key === 'ArrowDown') {
    $carHolder.className = 'carHolder south';
    data.facing = 'south';
    movement = 0;
  }

}

function moveCar(event) {
  movement += 0.02;

  if (data.facing === 'east') {

    $carHolder.style.left = (parseInt($carHolder.style.left) + movement) + 'px';

  }
  if (data.facing === 'south') {

    $carHolder.style.top = (parseInt($carHolder.style.top) + movement) + 'px';

  }

  if (data.facing === 'west') {

    $carHolder.style.left = (parseInt($carHolder.style.left) - movement) + 'px';

  }
  if (data.facing === 'north') {

    $carHolder.style.top = (parseInt($carHolder.style.top) - movement) + 'px';

  }
  data.x = parseInt($carHolder.style.left);
  data.y = parseInt($carHolder.style.top);
}

function autoDrive() {
  timeId = setInterval(moveCar, 16);
}

function stopDrive() {
  clearInterval(timeId);
}

document.addEventListener('keydown', function () {

  if (event.key === 'v') {
    autoDrive();
  }
  if (event.key === 'b') {
    stopDrive();
  }
  turnCar(event);
});

function carPlace() {
  if (data.facing === 'north') {
    $carHolder.className = 'carHolder north';
  } else if (data.facing === 'east') {
    $carHolder.className = 'carHolder';
  } else if (data.facing === 'west') {
    $carHolder.className = 'carHolder west';
  } else if (data.facing === 'south') {
    $carHolder.className = 'carHolder south';
  }
  $carHolder.style.left = data.x + 'px';
  $carHolder.style.top = data.y + 'px';

}

document.addEventListener('DOMContentLoaded', carPlace);
