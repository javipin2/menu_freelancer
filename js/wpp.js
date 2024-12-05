// Número de teléfono al que deseas enviar el mensaje (incluye el código de país)
const numeroTelefono = "+573106700214"; // Cambia esto por tu número de WhatsApp

// Función para redirigir a WhatsApp
function redirigirAWhatsApp(producto) {
    const mensaje = `Hola, estoy interesado en comprar el siguiente producto: *${producto}*`;
    const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
}

// Agregar evento a los botones de compra
document.querySelectorAll('.btn-comprar').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Evitar el comportamiento por defecto del enlace
        const producto = this.getAttribute('data-producto');
        redirigirAWhatsApp(producto);
    });
});
