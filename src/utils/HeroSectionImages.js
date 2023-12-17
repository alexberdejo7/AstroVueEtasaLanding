
// Tu script de JavaScript aquí
let images = [
    "/ImagenesEtasa/imagenfondo.jpeg", 
    "/ImagenesEtasa/Card0.jpg", 
    "/ImagenesEtasa/Card5.jpg"

];
let currentImage = 0;

function changeBackgroundImage() {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById('hero-section').style.backgroundImage = 'url(' + images[currentImage] + ')';
}

// Si deseas ejecutar la función cuando se carga la página
if (typeof window !== 'undefined') {
    window.onload = function() {
        setInterval(changeBackgroundImage, 5000);
    }
}

export default changeBackgroundImage
