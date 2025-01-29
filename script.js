// Convertir Celsius a Fahrenheit y Kelvin
function convertirTemperatura() {
    let celsius = prompt("Ingrese la temperatura en grados Celsius:");
    celsius = parseFloat(celsius);
    
    if (isNaN(celsius)) {
        alert("Error: Por favor ingrese un número válido.");
        convertirTemperatura(); // Vuelve a solicitar la entrada
        return;
    }
    
    let kelvin = celsius + 273.15;
    let fahrenheit = (celsius * 9/5) + 32;
    
    // Mostrar resultados en el DOM
    document.getElementById("resultado").innerHTML = `
        <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
        <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
    `;
    
    console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("convertir").addEventListener("click", convertirTemperatura);
});