const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const category = document.getElementById('category').value;
    const imageUrl = document.getElementById('Image_URL').value;
    const name = document.getElementById('Name').value;
    const price = document.getElementById('Price').value;

    let storeData = JSON.parse(localStorage.getItem('store'));

    if (!storeData) {
        storeData = {};
    }

    if (!storeData[category]) {
        storeData[category] = [];
    }

    if (storeData[category]) {
        const userData = {
            Image: imageUrl,
            Name: name,
            Price: parseInt(price),
        };

        storeData[category].push(userData);
        localStorage.setItem('store', JSON.stringify(storeData));
        console.log(storeData);
    }
});
