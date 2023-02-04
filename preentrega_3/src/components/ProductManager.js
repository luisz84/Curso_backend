import {promises as fs} from "fs";


export default class ProductManager{

    constructor (){
        this.patch= "./productos.txt"
        this.products= []
    }

    static id = 0;

    addProduct = async(title, description, price, imagen, code, stock) =>{
        ProductManager.id ++;
        let newProduct = {
            title, description, price, imagen, code, stock, id: ProductManager.id,
        };
            this.products.push(newProduct);
            
            await fs.writeFile(this.patch, JSON.stringify(this.products));
    };

    readProducts= async() =>{
        let respuesta = await fs.readFile(this.patch, "utf-8");
        return JSON.parse(respuesta);
    };
   getProducts = async() =>    {
        let respuesta2= await this.readProducts()
      return   console.log(respuesta2)
    } 

    getProductsById= async (id) => {
        let respuesta3 = await this.readProducts();
        if(!respuesta3.find(product=> product.id === id)) {
            console.log("producto no encontrado")
        }else{
            console.log(respuesta3.find((product)=> product.id === id))
        }
    }

    deleteProductsById = async (id) => {
        let respuesta3 = await this.readProducts();
        let productFilter = respuesta3.filter(product  => product.id != id)
        await fs.writeFile( this.patch , JSON.stringify(productFilter));
        console.log("producto eliminado");
    } 
 updateProducts = async({id,...producto}) => {
   await this.deleteProductsById(id);

   let productOld = await this.readProducts()
        console.log(productOld)
   let productModificados =[
    {...producto, id},...productOld];
  await fs.writeFile(this.patch, JSON.stringify(productModificados));
    };

}

const productos= new ProductManager();

productos.addProduct("titulo1", "Descripcion1", 2000, "imagen1", "abc1234", 4);
productos.addProduct("titulo2", "Descripcion2", 3000, "imagen2", "abc1234", 2);
productos.addProduct("titulo3", "Descripcion3", 4000, "imagen3", "abc1234", 3);
productos.addProduct("titulo4", "Descripcion4", 5000, "imagen4", "abc1234", 4);
productos.addProduct("titulo5", "Descripcion5", 6000, "imagen5", "abc1234", 5);

productos.getProducts();
