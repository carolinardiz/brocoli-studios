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

  var options = $.extend(
    {}, // empty object
    $.datepicker.regional["en-US"],
    {
      dateFormat: "mm/dd/yy",
    } // your custom options
  );

  $("#datepicker").datepicker(options);

  $("#boton-agenda").click(saveInfo);

  function saveInfo() {
    var kart = JSON.parse(localStorage.getItem("carrito"));
    let datePicker = $("#datepicker").val();
    for (var j = 0; j < kart.length; j++) {
      kart[j].fecha = datePicker;
    }
    localStorage.setItem("carrito", JSON.stringify(kart));
  }

  //PASO 3: INFO

  $("#myForm").submit(function () {
    return false;
  });

  $("#boton-3").click(function showInfo() {
    var reserva = localStorage.getItem("carrito");
    reserva = JSON.parse(reserva);
    for (var x = 0; x < reserva.length; x++) {
      $("#listaFinal").append(
        "<li>" + reserva[x].nombre + " " + reserva[x].fecha + "</li>"
      );
    }
  });
});
