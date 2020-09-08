/*Для странички нужно создать свою папочку с отдельными *index.html* и *index.js* файлами.
По желанию, можно оформить стилями, добавив css, — также отревьюим.

**Задача:**

Страничка, на которой есть поле для ввода и кнопка. Пользователь может ввести в поле id.
После нажатия на кнопку нужно сделать get запрос на https://jsonplaceholder.typicode.com/todos/
Вернувшийся массив необходимо вывести в табличку на этой же страничке и отфильтровать так,
чтобы остались только элементы с userId аналогичным введеному в поле.*/


let text = document.getElementById("text");

function ms(form){
    const promise = fetch("https://jsonplaceholder.typicode.com/todos/");
    promise
    .then(function(responce){
        return responce.json();
    })
    .then(function(data){
        let p = "";
        const regexp = /^userId:\d{1,3}/;

        for(key in data){
            if(data[key]["id"] === parseInt(form[0].value)){
                for(i in data[key]){
                    p += i + ":"+data[key][i];
                    text.innerHTML = p.match(regexp);
                }
            }
        }
    })

}
