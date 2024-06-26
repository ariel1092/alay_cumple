document.addEventListener("DOMContentLoaded", function() {
    const eventDate = new Date("June 26, 2024 18:00:00").getTime();
    const timerElement = document.getElementById("timer");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            clearInterval(countdownInterval);
            timerElement.innerHTML = "¡El evento ha comenzado!";
            timerElement.classList.add("complete"); // Agrega la clase complete al llegar a cero
        }
    }

    updateCountdown(); // Actualizar inmediatamente al cargar la página
    const countdownInterval = setInterval(updateCountdown, 1000);
});

const eventLocation = document.getElementById("event-location");
const eventMapLink = document.getElementById("event-map-link");

eventMapLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    
    const location = eventLocation.textContent.trim(); // Obtener la dirección del evento
    const encodedLocation = encodeURIComponent(location); // Codificar la dirección para la URL

    // URL de Google Maps con la dirección del evento
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedLocation}`;

    // Abrir Google Maps en una nueva pestaña
    window.open(mapsUrl, "_blank");
});

const rsvpBtn = document.getElementById("rsvp-btn");
const rsvpForm = document.getElementById("rsvp-form");
const submitRsvp = document.getElementById("submit-rsvp");

// Mostrar formulario de confirmación de asistencia
rsvpBtn.addEventListener("click", function() {
    rsvpForm.classList.toggle("hidden");
});

// Manejo del envío de la confirmación de asistencia
submitRsvp.addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    if (name && email) {
        alert(`Gracias, ${name}, por confirmar tu asistencia. Te enviaremos más detalles a ${email}.`);
        rsvpForm.classList.add("hidden");
    } else {
        alert("Por favor, llena ambos campos.");
    }
});

// Galería de fotos (ejemplo básico con imágenes de ejemplo)
const photoGallery = document.getElementById("photo-gallery");
const images = [""]; // Rutas de las imágenes

images.forEach(src => {
    const link = document.createElement("a");
    link.href = src;
    link.dataset.fancybox = "gallery";
    
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Photo";
    link.appendChild(img);
    
    photoGallery.appendChild(link);
});
