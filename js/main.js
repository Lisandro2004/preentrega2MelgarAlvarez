function capturarEntradas() {
    const numero1 = parseFloat(prompt("Ingrese el primer número:"));
    const operador = prompt("su usted quiere sumar aprete +, si usted quiere restar aprete -, si usted quiere multiplicar aprete *, si usted quiere dividir aprete /, si usted quiere saber el porcentaje indique %:");
    const numero2 = parseFloat(prompt("Ingrese el segundo número, su resultado aparecera en la consola apretando F12 o haciendo click derecho y seleccionar inspeccionar"));
  
    if (isNaN(numero1) || isNaN(numero2)) {
      console.log("Debe ingresar valores numéricos válidos.");
      return null;
    }
  
    return [numero1, operador, numero2];
  }
  function main() {
    const entrada = capturarEntradas();
    if (!entrada) return; 
  
    const [numero1, operador, numero2] = entrada;
    let resultado = 0;
    function calcularSuma(a, b) {
        return a + b;
      }
      
      function calcularResta(a, b) {
        return a - b;
      }
      
      function calcularMultiplicacion(a, b) {
        return a * b;
      }
      
      function calcularDivision(a, b) {
        if (b === 0) {
          console.log("No se puede dividir por cero.");
          return null;
        }
        return a / b;
      }
      
      function calcularPorcentaje(a, b) {
        return (a * b) / 100;
      }
      switch (operador) {
        case "+":
          resultado = calcularSuma(numero1, numero2);
          break;
        case "-":
          resultado = calcularResta(numero1, numero2);
          break;
        case "*":
          resultado = calcularMultiplicacion(numero1, numero2);
          break;
        case "/":
          resultado = calcularDivision(numero1, numero2);
          break;
        case "%":
          resultado = calcularPorcentaje(numero1, numero2);
          break;
        default:
          console.log("Operador no válido.");
          return;
      }
      console.log(`El resultado de ${numero1} ${operador} ${numero2} es: ${resultado}`);
    }
    
    
    main();
                  