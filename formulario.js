document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita el envío automático
            
            fetch(this.action, {
                method: this.method,
                body: new FormData(this),
                headers: { "Accept": "application/json" }
            })
            .then(response => {
                if (response.ok) {
                    alert("¡Gracias! Hemos recibido tu solicitud.");
                    window.location.href = "index.html"; // Redirige a la página principal
                } else {
                    alert("Hubo un error. Intenta nuevamente.");
                }
            })
            .catch(error => {
                console.error("Error en la solicitud:", error);
                alert("Hubo un problema con el envío del formulario.");
            });
        });
    }
});
console.log("✅ El archivo formulario.js se está ejecutando correctamente.");
