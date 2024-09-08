(async () => {
  const response = await fetch('items.json');
  const data = await response.json();
  localStorage.setItem('store', JSON.stringify(data));
})();

document.addEventListener('DOMContentLoaded', function () {storeTable('All')});
document.getElementById('category-select').addEventListener('change', function (e) {
  storeTable(e.target.value);
});

async function storeTable(category) {
  try {
    const storedData = localStorage.getItem('store');
    const data = JSON.parse(storedData);

    const table = document.getElementById('table');
    table.innerHTML = '';

    if (category === 'All') {
      const categories = Object.keys(data);
      categories.forEach(category => {
        if (data[category]) {
          data[category].forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
              <td>
                <div style="display: flex; align-items: center;">
                  <img src="${item.Image}" width="50" height="50" style="margin-right: 10px;">
                  ${item.Name}
                </div>
              </td>

              <td>${item.Price}</td>
              <td>${category}</td>
              <td>
                <div style="display: flex; justify-content: center;">
                  <div class="btn_click_me" style="margin-right: 50px;">
                    <a class="btn edit-btn" href="./create.html" style="text-decoration: none; color: black;">Edit</a>
                  </div>
                  <div>
                    <button class="btn delete-btn">Delete</button>
                  </div>
                </div>
              </td>
            `;
            tr.querySelector('.edit-btn').addEventListener('click', () => {
              console.log(`Edit ${item.Name}`);
            });

            tr.querySelector('.delete-btn').addEventListener('click', () => {
              console.log(`Delete ${item.Name}`);
            });

            table.appendChild(tr); 
          });
        }
      });
    } else {
      if (data[category]) {
        data[category].forEach(item => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>
              <div style="display: flex; align-items: center;">
                <img src="${item.Image}" width="50" height="50" style="margin-right: 10px;">
                ${item.Name}
              </div>
            </td>

            <td>${item.Price}</td>
            <td>${category}</td>
            <td>
              <div style="display: flex; justify-content: center;">
                <div class="btn_click_me" style="margin-right: 50px;">
                  <a class="btn edit-btn" href="./create.html" style="text-decoration: none; color: black;">Edit</a>
                </div>
                <div>
                  <button class="btn delete-btn">Delete</button>
                </div>
              </div>
            </td>
          `;
          tr.querySelector('.edit-btn').addEventListener('click', () => {
            console.log(`Edit ${item.Name}`);
          });

          tr.querySelector('.delete-btn').addEventListener('click', () => {
            console.log(`Delete ${item.Name}`);
          });

          table.appendChild(tr); 
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
}

