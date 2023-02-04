import { Console } from "console";
import  express from "express"
import { read } from "fs";
import ProductManager from "./components/ProductManager.js";

const api = express()
api.use(express.urlencoded({extended: true}));


const productos= new ProductManager()

const readProducts = productos.readProducts()

api.get("/products", async (req,res)=>{
    let limit = parseInt(req.query.limit); 
    if(!limit)return res.send(await readProducts)
    let allProducts= await readProducts;
    let productLimit= allProducts.slice(0, limit)
    console.log(limit)
   res.send(productLimit) 
});

api.get("/products/:id", async(req,res)=>{
    let id= parseInt(req.params.id)
    let allProducts= await readProducts;
    let productById = allProducts.find(product => product.id ===  id)
    res.send(productById);
})

const PORT= 8080;
const server = api.listen(PORT, () =>{
    console.log(`Express por localhost ${server.address().port}`)
});
server.on("error", (error) => console.log(`error del servidor ${error}`));






 
