import ProductApi from "~/api/ProductApi"
import type {IProductDb} from "~/types/IProduct.interface";
export function useProductMainPage(){

    let products = useState<IProductDb[]>(() => []);
    let currentProduct = useState<IProductDb | undefined>();
    
    async function getAllProducts() : Promise<void>{
        try{
            const res = await ProductApi.getAll();
            products.value = res.products || [];
        }
        catch(error){
            console.log("useProductMainPage/getAllProducts", error);
        }
    }
    async function getProduct(_id : string) : Promise<void>{
        for(let i = 0; i < products.value.length; i++){
            if (products.value[i]?._id == _id){
                currentProduct.value = products.value[i]
            }
        }
    }
    return {
        products, currentProduct,
        getAllProducts, getProduct 
    }
}