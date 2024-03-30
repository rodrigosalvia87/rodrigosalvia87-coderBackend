let Products = [];

const addProduct = (titulo, descripcion, precio, thumbnail, codigo, stock) => {

    const newProduct = {
        id: Products.length + 1,
        titulo,
        descripcion,
        precio,
        thumbnail,
        codigo,
        stock
    }

    if(Object.values(newProduct).includes(undefined)) {
        console.log("Todos los campos son Obligatorios");
        return;

    }



    const ProductExists = Products.find (Product => Product.codigo === codigo);
    if(ProductExists) {
        console.log(`El producto ${titulo} con el codigo ${codigo} ya existe`)
        return
    }



    Products.push(newProduct);


}
 

const getProducts = () => {
console.log (Products);
return Products;

}

const getProductById = (id) => {
    const Product = Products.find( Product => Product.id === id) 
    if(!Product) {
        console.log(`El producto con el id ${id} no ha sido encontrado`);
        return;
    }

console.log(Product)
return Product;


};


addProduct("Dosis Perfecta", "1er Disco de Estudio", 3500,"https://www.xnada.com.ar", "ATY587", 1500);
addProduct("X Nada", "2do Disco de Estudio", 4500,"https://www.xnada.com.ar", "ABT185", 1550);
addProduct("Vivo ION", "3er Disco de Estudio", 4500,"https://www.xnada.com.ar", "BFT585", 2000);
addProduct("EP - No hay Rey", "Single 2024", 5500,"https://www.xnada.com.ar", "BFT585", 5000);
addProduct("EP - Azul", "Single 2024", 6500,"https://www.xnada.com.ar", "HJE585");

/* getProducts(); */

getProductById(10);
