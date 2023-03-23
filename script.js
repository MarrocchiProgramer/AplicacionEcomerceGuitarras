let productos = [];

fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    productos = data.productos;
    console.log(productos); // Muestra los datos del archivo JSON en la consola
  });
