let Products = []
function parseDataToProducts () {

    for(let i = 0; i < data.length; i++) {
        let map = data [i]
        let product = new Product(map ["name"], map["caracteristicas"], map["precio"], map["cantidad"], map["imagenes"])
        Products.push(product)
    }
}

function renderAllProducts () {
    let container = document.getElementById("box")
    for (let i = 0; i < Products.length; i++) {
        let product = Products [i]
        container.innerHTML += product.htmlCard(i)
    }
}

function productSelected(pos) {
    let productselected = Products [pos]
    window.location = "./producto1.html?name=" + productselected.name
}

parseDataToProducts ()
renderAllProducts ()