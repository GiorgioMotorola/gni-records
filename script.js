const container = document.getElementById('container');

fetch('data.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            const listItem = document.createElement('div');
            listItem.className = 'box'; 
            listItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h4 style="color: #000000; margin-bottom: 40px;">${item.name}</h4>
                <h4 style="color: white; margin-bottom: 20px;">${item.album}</h4>
                <h4 style="color: #E98074 !important; display: flex; align-items: flex-end;">${item.genre} ${"||"} ${item.price}</h4>
            `;

            listItem.addEventListener('click', () => {
                window.location.href = `album.html?id=${item.id}`;
            });

            container.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

    
    