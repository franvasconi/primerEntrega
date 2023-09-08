// Función para mostrar un mensaje de bienvenida
function mostrarBienvenida() {
    alert("Bienvenido a nuestro simulador de compras de ropa.");
}

// Función para pedir el nombre y apellido
function obtenerNombreApellido() {
    let nombre = prompt("Por favor, ingrese su nombre:");
    let apellido = prompt("Por favor, ingrese su apellido:");

    return nombre + " " + apellido;
}

// Función para pedir el producto deseado
function obtenerProducto() {
    let productos = [
        "Producto 1",
        "Producto 2",
        "Producto 3",
        "Producto 4",
        "Producto 5",
        "Producto 6",
        "Producto 7",
        "Producto 8",
        "Producto 9",
        "Producto 10"
    ];

    let mensaje = "Seleccione un producto ingresando un numero del 1 al 10:\n";

    for (var i = 0; i < productos.length; i++) {
        mensaje += (i + 1) + ". " + productos[i] + "\n";
    }

    let eleccion = parseInt(prompt(mensaje));

    if (eleccion >= 1 && eleccion <= 10) {
        return productos[eleccion - 1];
    } else {
        alert("Seleccion no valida. Por favor, elija un número del 1 al 10.");
        return obtenerProducto(); // Pedir de nuevo la selección
    }
}

// Función para calcular el precio con cuotas y agregar el IVA
function calcularPrecioConCuotas(producto) {
    let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas (3 a 6) sin interes:"));
    let precioBase = 100; // Precio base del producto
    let precioTotal = precioBase * cuotas;

    if (cuotas >= 3 && cuotas <= 6) {
        let iva = precioTotal * 0.19; // IVA (19%)
        precioTotal += iva;
        return "Usted ha elegido " + producto + ". El precio total con " + cuotas + " cuotas sin interes y el IVA incluido es: $" + precioTotal.toFixed(2);
    } else {
        alert("Cantidad de cuotas no válida. Por favor, elija entre 3 y 6 cuotas.");
        return calcularPrecioConCuotas(producto); // Pedir de nuevo la cantidad de cuotas
    }
}

// Flujo principal del programa
mostrarBienvenida();
let nombreApellido = obtenerNombreApellido();
let productoElegido = obtenerProducto();
let resultado = calcularPrecioConCuotas(productoElegido);
alert("Hola, " + nombreApellido + ".\n" + resultado);
