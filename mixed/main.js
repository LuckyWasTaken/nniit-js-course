window.addEventListener('load', (event) => {
    const table = document.querySelector('.table');
    const button = document.querySelector('.btn-primary');
    const input = document.querySelector('#id');

    const getResource = async (propUserId) => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/todos/', { method: 'get' })
            .then((responce) => responce.json());

        return responce.filter(({ userId }) => propUserId === userId);
    };


    button.addEventListener('click', (event) => {
        let inputId = parseInt(input.value);
        getResource(inputId)
        .then((data) => {
            data.forEach(({ id, title, completed }) => {
                const row = document.createElement('tr');
                const nodeId = document.createElement('td');
                nodeId.textContent = id;
                const nodeTitle = document.createElement('td');
                nodeTitle.textContent = title;
                const nodeCompleted = document.createElement('td');
                nodeCompleted.textContent = completed ? 'completed' : 'not completed';
                const nodes = [nodeId, nodeTitle, nodeCompleted];
                nodes.forEach((node) => row.appendChild(node));
                table.appendChild(row);
            });
        })
        table.innerHTML = '';
    });
    
});




