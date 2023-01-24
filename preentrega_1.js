//creacion de la clase con constructor
class ProductManager{
    constructor(){
        this.products = []
    }

    static id= 0;
    // creacion de las propiedades y el metodo de agregar productos.
    addProduct(title, description, price, image, code, stock){
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                    console.log(`el codigo ${code} esta repetido`);
                    break;
            }
        }


 
        const newProduct= {title, description, price, image, code, stock, }
        if(!Object.values(newProduct).includes(undefined)){
       
       
              ProductManager.id++;
              this.products.push({...newProduct,
              id:ProductManager.id,});
              } else{
                console.log("todos los campos son obligatorios");
              }

   }
    
//metodo obtener producto
 
    getProduct(){
        return this.products;

    }
    existe(id) {
        return this.products.find((producto) => producto.id === id)
    }
    //metodo de validacion por id..
    getProductById(id){
        !this.existe(id) ? console.log ("not found") : console.log( this.existe(id))
    }
}
//testeo del codigo.
const productos= new ProductManager

// console.log(productos.getProduct());

productos.addProduct("mayo", "food", 2250,"imagen", "abc123", 5 );
// productos.addProduct("ketchup", "food", 2000,"imagen", "abc123", 4 );

// console.log(productos.getProduct());
productos.addProduct("moztaza", "food", 2000,"imagen", "abc123", 4 );
 //busqueda por id
console.log(productos.getProductById(1));

//busqueda por id no encontrado

console.log(productos.getProductById(6));

