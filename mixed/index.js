/*подключаем и загружаем через npm модули 'es6-promise' и 'isomorphic-fetch' ибо без них, почему-то в VS Code 
fetch отказывается работать, а отладчик выдает ошибку ReferenceError: fetch is not defined.
В отладчике Хрома такая проблема отсутствует.
*/

//require('es6-promise').polyfill();
//const fetch = require('isomorphic-fetch');

function getJson() {


	let id = parseInt(document.getElementById('input_id').value);

	fetch('https://jsonplaceholder.typicode.com/todos/')
		.then(response => response.json())
		.then(function(data) {
			let usersArray = [];
			usersArray = data.filter(function(object) {
				return object['userId'] === id;
			});
			createList(usersArray);
		});
}

function createList(usersArray) {
	let ol = document.getElementById('numeredList');
	//очистка предудыщего списка
	while(ol.firstChild){
		ol.removeChild(ol.firstChild);
	}
	//скрываем пустой список
	if(ol.childElementCount == 0){
		ol.style.visibility = 'hidden';
	}
	usersArray.forEach((element, any, userArray) => {
		keys = Object.keys(element);
		let s = '';
		item = keys.reduce((s, currentKey, index, keys) => {
			return (s += `${currentKey}: ${element[currentKey]}. `);
		}, '||');
			let li = document.createElement('li');
			li.appendChild(document.createTextNode(item));
			ol.appendChild(li);
			ol.style.cssText = "margin-left: auto; \
			margin-right: auto; \
			border: 3px solid #fff; \
			border-radius: 20px;"
	});
	
	
}
