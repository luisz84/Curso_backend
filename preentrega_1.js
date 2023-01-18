//creacion de la clase con constructor
class ProductManager{
    constructor(){
        this.products = []
    }

    static id= 0;
    // creacion de las propiedades y el metodo de agregar productos.
    addProduct(title, description, price, image, code, stock){
        ProductManager.id++;
        this.products.push({title, description, price, image, code, stock, id: ProductManager.id})
    }
//metodo obtener producto
    getProduct(){
        return this.products;

    }
    //metodo de validacion por id..
    getProductById(id){
        if(this.products.find((producto) => producto.id === id)){
            console.log ("existe"); 
        }else{
            console.log( "not found")
        }

    }
}
//testeo del codigo.
const productos= new ProductManager

console.log(productos.getProduct());

productos.addProduct("mayo", "food", 2250,"imagen", "abc123", 5 );
productos.addProduct("ketchup", "food", 2000,"imagen", "abc1232", 4 );

console.log(productos.getProduct());

console.log(productos.getProductById(4));
