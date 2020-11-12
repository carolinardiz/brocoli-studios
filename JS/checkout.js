var currentStep = 1;
$(document).ready(function () {
  $("button").click(handleStep);
  //carrito
  var carrito = JSON.parse(localStorage.getItem("carrito"));
  document
    .getElementById("productos")
    .appendChild(generarListaDeProductos(carrito));
  document
    .getElementById("total")
    .appendChild(document.createTextNode(" $" + calcularTotal(carrito)));

  localStorage.setItem("carrito", JSON.stringify([]));

  function handleStep(stepNumber) {
    $("#step-" + currentStep).attr("class", "check-out-hidden");
    $("#step-indicator-" + currentStep).removeClass("active");
    currentStep = currentStep + 1;
    $("#step-" + currentStep).attr("class", "check-out");
    $("#step-indicator-" + currentStep).addClass("active");
  }

  // funciones del carrito

  function generarListaDeProductos(array) {
    // Create the list element:
    var list = document.createElement("ul");

    for (var i = 0; i < array.length; i++) {
      // Create the list item:
      var item = document.createElement("li");

      // Set its contents:
      item.appendChild(
        document.createTextNode(array[i].nombre + " $" + array[i].precio)
      );
      // Add it to the list:
      list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
  }

  function calcularTotal(carrito) {
    var total = 0;
    for (var i = 0; i < carrito.length; i++) {
      total = total + carrito[i].precio;
    }
    return total;
  }

  //hasta aca el carrito

  //PASO 2 : AGENDA

  //PASO 3: INFO

  $("#myForm").submit(function () {
    return false;
  });
});
