import ProductApi from "~/api/ProductApi";
import type { IProduct, IProductDb } from "~/types/IProduct.interface";
export function useProductAdmin(){

    let productsArchive = useState<IProductDb[]>(() => []);
    let productsActive = useState<IProductDb[]>(() => []);

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

    async function getAllProductsArchive() : Promise<void>{
        try{
            const res = await ProductApi.getAll(); // getAll до добавления эндпоинта на получение архивных товаров
            productsArchive.value = res.products || [];
        } catch(error){
            console.log("useProductAdmin/getAllProductsArchive", error)
        }
    }

    async function getAllProductsActive() : Promise<void>{
        try{
            const res = await ProductApi.getAll(); // getAll до добавления эндпоинта на получение активных товаров
            productsActive.value = res.products || [];
        } catch(error){
            console.log("useProductAdmin/getAllProductsActive", error)
        }
    }

    // Функции для получения товаров одной категории, закоммент пока не будет функционала на бэке и в апишке
    // async function getAllProductsActiveByCategory(category : string) : Promise<IProductDb[]> {
    //     try{
    //         const res = await ProductApi.getAllProductsActiveByCategory(category);
    //         return res;
    //     } catch(error){
    //         console.log("useProductAdmin/getAllProductsActiveByCategory")
    //     }
    //     return [];
    // }

    // async function getAllProductsArchiveByCategory(category : string) : Promise<IProductDb[]> {
    //     try{
    //         const res = await ProductApi.getAllProductsArchiveByCategory(category);
    //         return res;
    //     } catch(error){
    //         console.log("useProductAdmin/getAllProductsArchiveByCategory")
    //     }
    //     return [];
    // }

    return {
        productsActive, productsArchive,
        createProduct, getAllProductsArchive, getAllProductsActive
    }
}