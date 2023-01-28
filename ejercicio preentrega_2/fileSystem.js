// const fs= require ("fs");
import {promises as fs} from "fs"

class ProductManager{
    constructor(){
        this.patch= "./productos.txt"
        this.products = []
    }

static id=0;

addProduct = async (title, description, price, image, code, stock)  => {

    ProductManager.id++

    let newProduct= {title, description, price, image, code, stock, id: ProductManager.id}

    this.products.push(newProduct)

    await fs.writeFile( this.patch , JSON.stringify(newProduct));

    // console.log(newProduct);
    };

    readProducts = async() =>{

        let respuesta=  await fs.readFile(this.patch, "utf-8")
        return JSON.parse(respuesta)
    }

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

    deleteProductsById = async () => {
        let respuesta3 = await this.readProducts();
        let productFilter = respuesta3.filter(product  => product.id != id)
        await fs.writeFile( this.patch , JSON.stringify(productFilter));

        console.log("producto eliminado");

    }

    updateProducts = async({id,...producto}) => {
   await this.deleteProductsById(id);

   let productold = await this.readProducts()
        console.log(productold)
   let productModificados =[
    {id, ...producto},...old];
    console.log(productModificados);

    }

}

const productos= new ProductManager();

// productos.addProduct("titulo1", "Descripcion1", 2000, "imagen1", "abc1234", 4);

// productos.getProducts();

// productos.getProductsById(1);

// productos.getProductsById(1);


// productos.deleteProductsById(1);

productos.updateProducts({
    title: 'titulo1',
    description: 'Descripcion1',
    price: 3000,
    image: 'imagen1',
    code: 'abc1234',
    stock: 4,
    id: 1

}) 