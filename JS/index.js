let productos = [
  {
    id: "SesionPlant",
    nombre: "Sesion Plant",
    precio: 1400,
  },
  {
    id: "SesionJagger",
    nombre: "Sesion Jagger",
    precio: 700,
  },
  {
    id: "SesionOzzy",
    nombre: "Sesion Ozzy",
    precio: 2000,
  },
];

localStorage.setItem("carrito", JSON.stringify([]));

$(document).ready(function () {
  console.log($(".boton-carrito").length);
  $(".boton-carrito").click(agregarAlCarrito);
});

function agregarAlCarrito(event) {
  var productId = $(event.target).attr("product-id");
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id === productId) {
      var carrito = JSON.parse(localStorage.getItem("carrito"));
      carrito.push(productos[i]);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }
}
