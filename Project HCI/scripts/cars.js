document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".carousel-track");
    const images = Array.from(track.children);

    images.forEach(image => {
        const clone = image.cloneNode(true);
        track.appendChild(clone);
    });
});
