document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (!id || isNaN(id)) {
        console.error('Invalid or missing ID');
    } else {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const item = data.find(item => item.id === parseInt(id));
                if (item) {
                    document.getElementById('album-image').src = item.img;
                    document.getElementById('artist-name').textContent = item.name;
                    document.getElementById('album-name').textContent = item.album;
                    document.getElementById('album-genre-price').textContent = `${item.genre} || ${item.price}`;
                    document.getElementById('album-year').textContent = item.year;

                    const trackList = document.getElementById('track-list');
                    trackList.innerHTML = '';

                    item.tracks.forEach((track) => {
                        const li = document.createElement('li');
                        li.textContent = track;
                        trackList.appendChild(li);
                    });
                } else {
                    console.error(`Album ${id} not found`);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});