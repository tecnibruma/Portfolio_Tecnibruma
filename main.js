document.addEventListener('DOMContentLoaded', () => {
    // 1. Capturamos el botón
    const btnContratar = document.getElementById('btn-contratar');

    if (btnContratar) {
        btnContratar.addEventListener('click', () => {
            // 2. Definimos el objeto del servicio
            const servicio = {
                nombre: "Consultoría Técnica de Desarrollo",
                precio: 80000,
                fecha: new Date().toLocaleDateString()
            };

            // 3. Guardamos en el localStorage (memoria del navegador)
            localStorage.setItem('carrito', JSON.stringify(servicio));

            // 4. Feedback para el usuario
            alert("¡Servicio agregado al presupuesto! Procediendo a la Fase 1...");
            
            // 5. Opcional: Redirección (cuando crees checkout.html)
             window.location.href = "checkout.html";
        });
    }
});