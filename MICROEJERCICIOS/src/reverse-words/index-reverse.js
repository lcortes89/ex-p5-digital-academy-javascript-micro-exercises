export function procesarTexto(texto) {
    const resultado = texto.trim().split(/\s+/).reverse().join(" ");
    const elemento = document.getElementById("resultado");
    if (elemento) {
        elemento.textContent = resultado;
    }
}

// Vinculación para que funcione con el botón en el HTML
// Esto busca el botón y le asigna la lógica al hacer clic
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btnEnviar');
    if (boton) {
        boton.addEventListener('click', () => {
            const input = document.getElementById('miTexto').value;
            procesarTexto(input);
        });
    }
});