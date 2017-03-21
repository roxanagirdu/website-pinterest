document.addEventListener('DOMContentLoaded',function(){
var container = document.getElementById('container');
var item = container.getElementsByClassName('item');


for (var i = 2; i <= 2; i++)
{
  var newItem = item[0].cloneNode();
  newItem.innerHTML = i;
  container.appendChild(newItem);
  }

});
