function displayRelatedAlbums(data, genre, currentId) {
  const relatedAlbums = data.filter(
    (item) => item.genre === genre && parseInt(item.id) !== parseInt(currentId)
  );

  if (relatedAlbums.length > 0) {
    const relatedAlbumsContainer = document.getElementById("related-albums");
    relatedAlbumsContainer.innerHTML = "";

    relatedAlbums.forEach((relatedAlbum) => {
      const albumCard = document.createElement("div");
      albumCard.classList.add("album-card");

      const albumLink = document.createElement("a");
      albumLink.href = `album.html?id=${relatedAlbum.id}`;
      albumLink.classList.add("album-link");

      albumLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = albumLink.href;
      });

      const albumImage = document.createElement("img");
      albumImage.src = relatedAlbum.img;

      const albumName = document.createElement("p");
      albumName.textContent = relatedAlbum.album;

      const artistName = document.createElement("p");
      artistName.textContent = relatedAlbum.name;

      albumLink.appendChild(albumImage);
      albumLink.appendChild(albumName);
      albumLink.appendChild(artistName);

      albumCard.appendChild(albumLink);

      relatedAlbumsContainer.appendChild(albumCard);
    });
  } else {
    console.log("No related albums found for this genre.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (!id || isNaN(id)) {
    console.error("Invalid or missing ID");
  } else {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((item) => item.id === parseInt(id));
        if (item) {
          document.getElementById("album-image").src = item.img;
          document.getElementById("artist-name").textContent = item.name;
          document.getElementById("album-name").textContent = item.album;
          document.getElementById(
            "album-genre-price"
          ).textContent = `${item.genre} || ${item.price}`;
          document.getElementById("album-year").textContent = item.year;

          const trackList = document.getElementById("track-list");
          trackList.innerHTML = "";

          item.tracks.forEach((track) => {
            const li = document.createElement("li");
            li.textContent = track;
            trackList.appendChild(li);
          });

          displayRelatedAlbums(data, item.genre, id);
        } else {
          console.error(`Album ${id} not found`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
