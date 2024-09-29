const productos = document.querySelectorAll('#producto');

productos.forEach(producto => {
  const boton = producto.querySelector('button');
  boton.addEventListener('click', () => {
    // Aquí puedes agregar la lógica para agregar el producto al carrito
    console.log('Producto agregado al carrito');
  });
});