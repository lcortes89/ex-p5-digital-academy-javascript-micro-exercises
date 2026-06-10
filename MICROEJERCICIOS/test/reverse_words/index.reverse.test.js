// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { procesarTexto } from '../../src/reverse-words/index-reverse.js'; // Asegúrate de que la ruta sea correcta

describe('procesarTexto', () => {
    
    // Configuramos un DOM básico antes de cada test para que el id "resultado" exista
    beforeEach(() => {
        document.body.innerHTML = '<p id="resultado"></p>';
    });

    it('debería invertir el orden de las palabras y mostrarlo en el DOM', () => {
        procesarTexto("Hola Mundo");
        const resultado = document.getElementById("resultado");
        expect(resultado.textContent).toBe("Mundo Hola");
    });

    it('debería manejar espacios extra correctamente', () => {
        procesarTexto("  Aprender   JavaScript  ");
        const resultado = document.getElementById("resultado");
        expect(resultado.textContent).toBe("JavaScript Aprender");
    });

    it('debería manejar una sola palabra', () => {
        procesarTexto("Hola");
        const resultado = document.getElementById("resultado");
        expect(resultado.textContent).toBe("Hola");
    });
});
