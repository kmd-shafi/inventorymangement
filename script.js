const table = document.getElementById('table').getElementsByTagName('tbody')[0];

fetch('items.json')
    .then(response => response.json())
    .then(data => {
        data.Utensils.forEach((item) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.Name}</td>
                <td>${item.Price}</td>
            `;
            table.appendChild(tr);
        });
    });
