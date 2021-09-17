var data = {
  facing: 'east',
  x: 0,
  y: 0,
  speed: 0
};

var previousDataJSON = localStorage.getItem('data-raceCar-local-storage');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', function () {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data-raceCar-local-storage', dataJSON);
});
