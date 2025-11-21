
let Index = 0;

function mudarImagem(direction) {
    const slides = document.querySelector('.trabalhos-slide');
    const totalSlides = slides.children.length;

    Index += direction;

    if (Index < 0) {
        Index = totalSlides - 1;
    } else if (Index >= totalSlides) {
        Index = 0;
    }
    slides.style.transform = `translateX(${-Index * 100}%)`;
}

