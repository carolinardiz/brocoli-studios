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

    var options = $.extend(
      {}, // empty object
      $.datepicker.regional["en-US"],
      {
        dateFormat: "dd/mm/yy",
      } // your custom options
    );

    for (var i = 0; i < array.length; i++) {
      // Create the list item:

      $(list).append(
        `<li class="lista-prod"><p class="nombre-sesion"> ` +
          array[i].nombre +
          ` </p><p class="precio">  $ ` +
          array[i].precio +
          `</p></li>`
      );
      $("#calendar").append(
        `<input type="text" id="datepicker-` +
          i +
          `" placeholder="Elegí una fecha">`
      );
      $("#datepicker-" + i).datepicker(options);
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

  $("#boton-agenda").click(saveInfo);

  function saveInfo() {
    var kart = JSON.parse(localStorage.getItem("carrito"));
    for (var j = 0; j < kart.length; j++) {
      let datePicker = $("#datepicker-" + j).val();

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
        `<li><p>` +
          reserva[x].nombre +
          `</p><p>` +
          reserva[x].fecha +
          `</p></li>`
      );
    }
  });
});
