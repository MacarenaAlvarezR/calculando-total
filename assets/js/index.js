const precioBase = 200000;
let cantidad = 0;
const precioIn = document.querySelector('.precio-inicial');
precioIn.innerHTML = precioBase.toLocaleString();

const cantidadSpan = document.querySelector('.cantidad');

const totalSpan = document.querySelector('.valor-total');

function actualizarTotal() {
    const total = precioBase * cantidad;
    totalSpan.innerHTML = total.toLocaleString();
}

let btnSumar = document.querySelector('#sumar');
btnSumar.addEventListener("click", () => {
    cantidad++;
    let cantidadSpan = document.querySelector('.cantidad');
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
    let valor = Number(cantidadSpan.innerHTML)
    cantidadSpan.innerHTML = valor + 1;
})
let btnRestar = document.querySelector('#restar')
btnRestar.addEventListener("click", () => {
    cantidad--;
    let cantidadSpan = document.querySelector('.cantidad');
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
    let valor = Number(cantidadSpan.innerHTML)
    cantidadSpan.innerHTML = valor - 1;
})

