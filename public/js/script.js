document.addEventListener("DOMContentLoaded", function() {
    const eventLocation = document.getElementById("event-location");
    const eventMapLink = document.getElementById("event-map-link");
    const rsvpBtn = document.getElementById("rsvp-btn");
    const rsvpForm = document.getElementById("rsvp-form");
    const submitRsvp = document.getElementById("submit-rsvp");

    // Función para abrir Google Maps con la dirección del evento
    eventMapLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        
        const location = eventLocation.textContent.trim(); // Obtener la dirección del evento
        const encodedLocation = encodeURIComponent(location); // Codificar la dirección para la URL

        // URL de Google Maps con la dirección del evento
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedLocation}`;

        // Abrir Google Maps en una nueva pestaña
        window.open(mapsUrl, "_blank");
    });

    // Mostrar y ocultar formulario de confirmación de asistencia
    rsvpBtn.addEventListener("click", function() {
        rsvpForm.classList.toggle("hidden");
    });

    // Manejar envío de la confirmación de asistencia
    submitRsvp.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el envío del formulario
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        
        if (name && email) {
            alert(`Gracias, ${name}, por confirmar tu asistencia. Te enviaremos más detalles a ${email}.`);
            rsvpForm.classList.add("hidden");
        } else {
            alert("Por favor, llena ambos campos.");
        }
    });

    // Galería de fotos (simulación con enlace a galería.html)
    const photoGalleryLink = document.getElementById("photo-gallery-link");
    photoGalleryLink.addEventListener("click", function(event) {
        // Aquí puedes agregar código para redireccionar a la galería de fotos real si es necesario
        // Por ejemplo:
        // window.location.href = "galeria.html";
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        alert("Implementa la lógica para mostrar la galería de fotos."); // Placeholder
    });

    // Función de cuenta regresiva (ejemplo básico)
    const eventDate = new Date("June 25, 2024 00:00:00").getTime();
    const timerElement = document.getElementById("timer");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % 1000) / 1000);

        timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            timerElement.textContent = "¡El evento ha comenzado!";
        }
    }

    updateCountdown(); // Llamar inicialmente para que se muestre de inmediato
    const countdownInterval = setInterval(updateCountdown, 1000); // Actualizar cada segundo
});
