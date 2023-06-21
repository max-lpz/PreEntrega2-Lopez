let productos = [
    {
        id: 1,
        nombre: "Celular",
        marca: "iPhone",
        costo: 150000,
    },
    {
        id: 2,
        nombre: "Bicicleta",
        marca: "BMX",
        costo: 80000,
    },
    {
        id: 3,
        nombre: "Carpa",
        marca: "Montagne",
        costo: 360000,
    },
    {
        id: 4,
        nombre: "Accesorios",
        marca: "Deco",
        costo: 5000,
    },
]

let resultado = []
let mensaje = ""
let idProd = 0

let pedirProducto = () => {
    idProd = parseInt(prompt("¿Qué producto desea ver?\n1-Celular\n2-Bicicleta\n3-Carpa\n4-Accesorios\n0-Salir"))
    if (idProd != 0) {
        let productoElegido = productos.find((producto) => producto.id === idProd)
        while (!productoElegido) {
            alert("Producto no encontrado.")
            idProd = parseInt(prompt("¿Qué producto desea ver?\n1-Celular\n2-Bicicleta\n3-Carpa\n4-Accesorios\n0-Salir"))
            productoElegido = productos.find((producto) => producto.id === idProd)
        }
        return productoElegido
    } else if ((idProd === 0) || (idProd === null)) {
        alert('Adios, gracias por si visita')
    }
}
let producto = pedirProducto()
resultado.push(producto)
resultado.forEach((producto) => {
    mensaje += `El producto: ${producto.nombre} tiene un costo de: $${producto.costo}\n`
})
alert(mensaje)


