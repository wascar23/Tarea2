function calcular(operador) {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var resultado;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor ingrese dos números válidos.");
    return;
  }

  if (operador === '/' && num2 === 0) {
    alert("No se puede dividir entre cero.");
    return;
  }

  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num1 / num2;
      break;
  }

  document.getElementById('resultado').textContent = resultado;

  var operacion = num1 + " " + operador + " " + num2 + " = " + resultado;
  guardarHistorial(operacion);
}

function guardarHistorial(operacion) {
  var historial = JSON.parse(localStorage.getItem("historial")) || [];
  historial.push(operacion);
  localStorage.setItem("historial", JSON.stringify(historial));
  mostrarHistorial();
}

function mostrarHistorial() {
  var historial = JSON.parse(localStorage.getItem("historial")) || [];
  var lista = document.getElementById("historial");
  lista.innerHTML = "";
  for (var i = 0; i < historial.length; i++) {
    var li = document.createElement("li");
    li.textContent = historial[i];
    lista.appendChild(li);
  }
}

function limpiarHistorial() {
  localStorage.removeItem("historial");
  mostrarHistorial();
}

window.onload = function () {
  mostrarHistorial();
};