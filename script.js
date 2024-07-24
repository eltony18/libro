document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.getElementById('buy-button');
    const contactForm = document.getElementById('contact-form');

    buyButton.addEventListener('click', function() {
        alert('¡Gracias por tu compra!');
        // Aquí podrías añadir más lógica para procesar la compra si fuera necesario
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Aquí podrías añadir la lógica para enviar el mensaje, por ejemplo mediante AJAX o una API de correo

        alert(`Mensaje enviado:\nNombre: ${name}\nEmail: ${email}\nMensaje: ${message}`);
        contactForm.reset();
    });
});
