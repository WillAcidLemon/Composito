// Carrusel de reseñas (rotación automática de testimonios)
let currentIndex = 0;
const testimonials = document.querySelectorAll('.carousel p');

function showNextTestimonial() {
    testimonials[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].style.display = 'block';
}

// Inicializa el carrusel
setInterval(showNextTestimonial, 3000); // Cambia cada 3 segundos

// Muestra el primer testimonio al cargar la página
testimonials.forEach((testimonial, index) => {
    testimonial.style.display = index === 0 ? 'block' : 'none';
});
