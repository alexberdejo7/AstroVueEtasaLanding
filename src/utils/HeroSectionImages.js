
// Tu script de JavaScript aquí
let images = [
    "/EtasaImg/FOTO19.webp",
    "/EtasaImg/casa4.webp",
    "/EtasaImg/FOTO4.webp",
    "/EtasaImg/FOTO210.webp",
    "/EtasaImg/apple3.webp",
];
let currentImage = 0;

function changeBackgroundImage() {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById('hero-section').style.backgroundImage = 'url(' + images[currentImage] + ')';
}

// Si deseas ejecutar la función cuando se carga la página
if (typeof window !== 'undefined') {
    window.onload = function() {
        setInterval(changeBackgroundImage, 4000);
    }
}

export default changeBackgroundImage 
