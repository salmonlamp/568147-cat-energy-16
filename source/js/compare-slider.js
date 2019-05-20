var range = document.querySelector('#compare__range');
var before = document.querySelector('.compare__item--before');

range.addEventListener('input', function () {
  before.style.width = 100 - range.value + "%";
});
