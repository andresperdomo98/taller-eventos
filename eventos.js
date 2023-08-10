document.addEventListener("DOMContentLoaded", function() {
    var divElement = document.getElementById("miDiv");
    var botonElement = document.getElementById("miBoton");

    divElement.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });

    botonElement.addEventListener("click", function(event) {
        event.stopPropagation(); // Evita la propagación del evento al div
        alert("Hola!");
    });
});