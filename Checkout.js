document.addEventListener('DOMContentLoaded', () => {
    const resumenDiv = document.getElementById('resumen-pedido');
    const servicio = JSON.parse(localStorage.getItem('carrito'));

    if (servicio) {
        resumenDiv.innerHTML = `
            <div class="card p-3">
                <h4>Servicio: ${servicio.nombre}</h4>
                <p><strong>Costo:</strong> $${servicio.precio.toLocaleString()}</p>
            </div>
        `;
    } else {
        resumenDiv.innerHTML = "<p>No hay servicios.</p>";
    }
});