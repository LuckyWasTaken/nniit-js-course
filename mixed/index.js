//const id = parseInt(document.getElementById("id").value);

function out(filterData) {
    //let list = document.getElementById('list');
    list.innerHTML="";
    filterData.forEach((item, i) => {
        let element = document.createElement('li');
        element.innerText = item['title'];
        list.appendChild(element);
    });

}

function load() {

    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let id = parseFloat(document.getElementById("id").value);
            let filterData = data.filter((object) => {
                return object['userId'] === id;
            })

            out(filterData);
        })
        .then(() => {
            console.log('ok');
        })
        .catch(() => {
            console.log('error');
        });
}