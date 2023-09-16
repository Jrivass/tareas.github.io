// Tarea - Mayor de tres números
function ejecutarTarea1() {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    const num3 = parseFloat(prompt("Ingresa el tercer número:"));
  
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
      const mayorNumero = Math.max(num1, num2, num3);
      document.getElementById("mayorNumero").textContent = `El número más grande es: ${mayorNumero}`;
    } else {
      document.getElementById("mayorNumero").textContent = "Por favor, ingresa tres números válidos.";
    }
  }
  
  // Tarea - Diversión con funciones
  function ejecutarTarea2() {
    const forma = prompt("Ingresa el nombre de la forma (rectángulo, cuadrado o hexágono):").toLowerCase();
    let area;
  
    switch (forma) {
      case "rectangulo":
        const baseRectangulo = parseFloat(prompt("Ingresa la base del rectángulo:"));
        const alturaRectangulo = parseFloat(prompt("Ingresa la altura del rectángulo:"));
        area = baseRectangulo * alturaRectangulo;
        break;
      case "cuadrado":
        const ladoCuadrado = parseFloat(prompt("Ingresa el lado del cuadrado:"));
        area = ladoCuadrado * ladoCuadrado;
        break;
      case "hexagono":
        const ladoHexagono = parseFloat(prompt("Ingresa el lado del hexágono:"));
        area = (3 * Math.sqrt(3) * ladoHexagono * ladoHexagono) / 2;
        break;
      default:
        area = "Forma no válida. Por favor, ingresa una forma válida.";
    }
  
    document.getElementById("saludo").textContent = `Área de la forma ${forma}: ${area}`;
  }
  function ejecutarTarea4() {
    const numeroEspecies = 3; // Fijamos el número de especies en 3
    const especiesAnimales = [];
  
    // Solicitamos al usuario ingresar 3 nombres de especies animales
    for (let i = 0; i < numeroEspecies; i++) {
      const nombreEspecie = prompt(`Ingrese el nombre de la especie #${i + 1}:`);
      especiesAnimales.push(nombreEspecie);
    }
  
    let enumeracion = "";
  
    // Creamos una enumeración de las especies ingresadas
    for (let i = 0; i < especiesAnimales.length; i++) {
      enumeracion += `${i + 1}: "${especiesAnimales[i]}"<br>`;
    }
  
    // Mostramos el resultado en el elemento con id "nombresEspecie"
    document.getElementById("nombresEspecie").innerHTML = enumeracion;
  
  }
  
  
  function limpiarResultado() {
    const outputs = document.querySelectorAll(".output");
    outputs.forEach((output) => {
      output.textContent = "";
    });
  }
  
