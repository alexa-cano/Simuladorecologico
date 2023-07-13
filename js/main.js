// Impacto ambiental por tipo de material en kg de CO2
const impactoPorMaterial = {
    'plastico': 1.5,
    'aluminio': 1.7,
    'papel': 1.2
  };
  
  // Ahorro de energía por tipo de acción en kWh
  const ahorroPorAccion = {
    'luces': 0.05,
    'electrodomesticos': 0.2
  };
  
  // Costo promedio de la energía en $/kWh
  const costoEnergia = 0.12;
  
  function pedirCantidad(material) {
    let cantidad = Number(prompt("¿Cuántas " + material + " estás reciclando al año?"));
  
    while (!(Number.isInteger(cantidad) && cantidad >= 0)) {
      alert("Por favor ingresa un número entero que sea igual o mayor a 0");
      cantidad = Number(prompt("¿Cuántas " + material + " estás reciclando al año?"));
    }
    
    return cantidad;
  }
  
  function pedirPeso(material) {
    let peso = Number(prompt("¿Cuántos kilogramos de " + material + " estás reciclando al año?"));
  
    while (!(Number.isFinite(peso) && peso >= 0)) {
      alert("Por favor ingresa un número (puede ser decimal) que sea igual o mayor a 0");
      peso = Number(prompt("¿Cuántos kilogramos de " + material + " estás reciclando al año?"));
    }
  
    return peso;
  }
  
  function calcularImpacto(cantidad, material) {
    return cantidad * impactoPorMaterial[material];
  }
  
  function calcularAhorro(acciones) {
    let ahorroTotal = 0;
  
    for (let accion in acciones) {
      ahorroTotal += acciones[accion] * ahorroPorAccion[accion];
    }
  
    return ahorroTotal * costoEnergia * 365;
  }
  
  // Preguntar al usuario cuántos artículos reciclables están utilizando
  let cantidadPlastico = pedirCantidad("botellas de plástico");
  let ahorroPlastico = calcularImpacto(cantidadPlastico, 'plastico');
  
  let cantidadAluminio = pedirCantidad("latas de aluminio");
  let ahorroAluminio = calcularImpacto(cantidadAluminio, 'aluminio');
  
  let cantidadPapel = pedirPeso("papel");
  let ahorroPapel = calcularImpacto(cantidadPapel, 'papel');
  
  // Preguntar al usuario qué acciones de ahorro de energía están realizando
  let cantidadLuces = Number(prompt("¿Cuántas veces apagas las luces al día?"));
  let cantidadElectrodomesticos = Number(prompt("¿Cuántas veces usas electrodomésticos de bajo consumo al día?"));
  let acciones = {
    'luces': cantidadLuces,
    'electrodomesticos': cantidadElectrodomesticos
  };
  let ahorroEnergia = calcularAhorro(acciones);
  
  console.log("Estás evitando emitir " + ahorroPlastico + " kg de CO2 al reciclar plástico al año.");
  console.log("Estás evitando emitir " + ahorroAluminio + " kg de CO2 al reciclar aluminio al año.");
  console.log("Estás evitando emitir " + ahorroPapel + " kg de CO2 al reciclar papel al año.");
  console.log("Estás ahorrando " + ahorroEnergia + " dólares con tus acciones de ahorro de energía al año.");
  