import ProductApi from "~/api/ProductApi";
import type { IProduct } from "~/types/IProduct.interface";
export function useProductAdmin(){

    async function createProduct(name : string, category : string, images : string[], model : string, color : string, size : string) : Promise<Boolean>{
        try{
            const product : IProduct = {
                name,
                category,
                images,
                variants : [{
                    model,
                    color,
                    size,
                }],
            } 
            const res = await ProductApi.create(product);
            // if(res?._id){
            //     console.log("Succes! Product is created, id : ", res?._id);
            //     return true
            // }
        }catch(error){
            console.log("useProductAdmin/createProduct", error);
            return false;
        }
        return true;
    }

    return {
        createProduct
    }
}