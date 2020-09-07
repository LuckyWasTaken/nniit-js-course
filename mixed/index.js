document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const input = document.getElementById("form-inputed-user-id");
    const tableData = document.getElementById("table-data");
    const flushButton = document.getElementById("form-button-flush");
    let tablerows = [];

    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            flushTablerows(tablerows);
            let foundData = [];
            if (input.value ==""){
                foundData = [...data];
            }
            else {
                foundData = data.filter(function(datum){return datum[`userId`].toString() == input.value})
                // for (datum of data){
                //     if (datum[`userId`].toString() == input.value){
                //         foundData.push(datum);
                //     }
                //}
            }
            createTableData(foundData, tableData, tablerows);
        });
    });

    flushButton.addEventListener('click', () => {
        flushTablerows(tablerows);
        flushInput(input);
    });
});

const createTableData = (data, table, tablerows) => { 
    let i = 1;
    for(datum of data){
        const tr = document.createElement("tr");
        const tdN = document.createElement("td");
        const tdUserId = document.createElement("td");
        const tdId = document.createElement("td");
        const tdTitle = document.createElement("td");
        const tdCompleted = document.createElement("td");

        table.append(tr);
        tr.append(tdN);
        tr.append(tdUserId);
        tr.append(tdId);
        tr.append(tdTitle);
        tr.append(tdCompleted);

        tdN.innerHTML = i++;    
        tdUserId.innerHTML = datum[`userId`];
        tdId.innerHTML = datum[`id`];
        tdTitle.innerHTML = datum[`title`];
        tdCompleted.innerHTML = datum[`completed`];

        tablerows.push(tr);
    };
};

const flushTablerows = (tablerows) => {
    for (tr of tablerows){
        tr.remove();
    }
}

const flushInput = (input) => {
    input.value = "";
}