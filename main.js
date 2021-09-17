var $carHolder = document.querySelector('.carHolder');
var data = {
  facing: 'east',
  x: 0,
  y: 0,
  speed: 2
};
var timeId = null;
var $speedDisplay = document.querySelector('.speed');
var accl = 0;

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

function moveCar(event) {

  if (data.facing === 'east') {

    $carHolder.style.left = data.x + 'px';
    data.x += data.speed;
  }
  if (data.facing === 'south') {

    $carHolder.style.top = data.y + 'px';
    data.y += data.speed;
  }

  if (data.facing === 'west') {

    $carHolder.style.left = data.x + 'px';
    data.x -= data.speed;
  }
  if (data.facing === 'north') {

    $carHolder.style.top = data.y + 'px';
    data.y -= data.speed;
  }
}

function accCar() {
  accl += 0.05;
  if (data.facing === 'east') {

    $carHolder.style.left = (data.x + accl) + 'px';

  }
  if (data.facing === 'south') {

    $carHolder.style.top = (data.y + accl) + 'px';

  }

  if (data.facing === 'west') {

    $carHolder.style.left = (data.x - accl) + 'px';

  }
  if (data.facing === 'north') {

    $carHolder.style.top = (data.y - accl) + 'px';

  }
  data.x = parseInt($carHolder.style.left);
  data.y = parseInt($carHolder.style.top);
}

function autoDrive() {
  clearInterval(timeId);
  timeId = setInterval(moveCar, 16);
}

function autoDriveAccl() {
  clearInterval(timeId);
  timeId = setInterval(accCar, 16);
}
function stopDrive() {
  clearInterval(timeId);
}

function speedChange(event) {

  if (Number.isInteger(Number(event.key)) === false) {
    return;
  }
  data.speed = Number(event.key);
  $speedDisplay.textContent = 'Speed: ' + data.speed;
}

document.addEventListener('keydown', function () {

  if (event.key === 'v') {
    autoDrive();
  }
  if (event.key === 'b') {
    stopDrive();
  }

  if (event.key === 'a') {
    autoDriveAccl();
  }

  turnCar(event);
  speedChange(event);

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
