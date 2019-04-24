function output(filteredData) {

    const elc = document.getElementById("count");
    elc.innerText = `${filteredData.length} elements`;
    let list = document.forms.namedItem('list');
    while (list.firstChild){
        list.removeChild(list.firstChild);
    }
    if (filteredData.length === 0) {
        return;
    }

    filteredData.forEach((item, i) => {
        let el1 = document.createElement('li');
        el1.innerText = item['title'];
        list.appendChild(el1);
    })

}

function parse() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let userId = parseFloat(document.getElementById('userID').value);
            let filteredData = data.filter((obj) => {
                return obj['userId'] === userId;
            })
            output(filteredData);
        })
        .then(() => {
            const el = document.getElementById("message");
            el.innerText = "Ok"
        })
        .catch(() => {
            const el = document.getElementById("message");
            el.innerText = "Error";
        });
}