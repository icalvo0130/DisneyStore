class Product {
    constructor(name, caracteristicas, precio, cantidad, imagenes) {
        this.name = name
        this.caracteristicas = caracteristicas
        this.precio = precio
        this.cantidad = cantidad
        this.imagenes = imagenes
    }
    htmlCard (pos) {
        return  `
        <div class="box" onclick="productSelected(${pos})">
                <div class="image">
                    <div class="producto1.html"><img src="${this.imagenes[0]}"" ></a>
                    <div class="iconos"> 
                        <a href="#" class="fav" > <i class='bx bx-heart'></i> </a>
                        <a href="producto1.html" class="look"> <i class='bx bx-info-circle'></i> </a>

                    </div>
                </div>
                <div class="content">
                    <h3> ${this.name} </h3>
                    <div class="precio">$ ${this.price} </div>
                </div>
            </div>
        `
    }
}

