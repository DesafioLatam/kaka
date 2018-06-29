const elements = document.querySelectorAll('animate');

function updateDuration(val) {
  var newVal = Math.abs(val) + 'ms';
  Array.prototype.forEach.call(elements, function(el, i){
    el.setAttribute('dur',newVal);
  });
}