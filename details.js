const params = new URLSearchParams(window.location.search);
const nameFromUrl = params.get('name');

function getProduct() {
    for (let i = 0; i < data.length; i++) {
        let map = data[i];
        let title = map["name"];
        
        if (title === nameFromUrl) {
            let product = new Product(
                map["name"],
                map["caracteristica1"],
                map["caracteristica2"],
                map["caracteristica3"],
                map["precio"],
                map["cantidad"],
                map["imagenes"]
            );
            return product;
        }
    }
}

function renderProduct() {
    let product = getProduct();
    if (!product) {
        console.error("No se encontró el producto");
        return;
    }

    let titleH1 = document.getElementById("title");
    titleH1.innerHTML = product.name;

    let caracteristica1Li = document.getElementById("caracteristica1");
    caracteristica1Li.innerHTML = product.caracteristica1;

    let caracteristica2Li = document.getElementById("caracteristica2");
    caracteristica2Li.innerHTML = product.caracteristica2;

    let caracteristica3Li = document.getElementById("caracteristica3");
    caracteristica3Li.innerHTML = product.caracteristica3;

    let priceH4 = document.getElementById("price");
    priceH4.innerHTML = "$" + product.precio;

    let mainImg = document.getElementById("main-img");
    mainImg.src = product.imagenes[0];

    let image1 = document.getElementById("image1");
    image1.src = product.imagenes[1];

    let image2 = document.getElementById("image2");
    image2.src = product.imagenes[2];
}

renderProduct();

let cantidad = 1;
document.querySelector('.bxs-plus-circle').addEventListener('click', function () {
    cantidad++;
    document.querySelector('.cantidad h1').textContent = cantidad;
});

document.querySelector('.bxs-no-entry').addEventListener('click', function () {
    if (cantidad > 1) {
        cantidad--;
        document.querySelector('.cantidad h1').textContent = cantidad;
    }
});

