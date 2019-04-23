button1.onclick = function() {
    button1.value ="Цвет настроения синий :)";
	button2.value ="Зеленый";
	document.body.firstElementChild.nextElementSibling.style.color = 'blue';
	
  };
  button2.onclick = function() {
    button1.value ="Синий";
    button2.value ="весна - все зеленеет";
	document.body.style.color = 'green';
	document.body.firstElementChild.nextElementSibling.style.color = 'green';
  };