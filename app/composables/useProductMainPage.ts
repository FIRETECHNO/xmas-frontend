import type {IProductDb} from "~/types/IProduct.interface";
export function useProductMainPage(){
    let products = useState<IProductDb[]>(() => []);

    // Затычки для примера
    // products.value = [{
    //     _id : "123",
    //     name : "Cross",
    //     category : "Shoes",
    //     images : ["/"],
    //     variants : [
    //         {model: "Cool", color: "red", size : "48"}
    //     ] 
    // },
    // {
    //     _id : "123",
    //     name : "Cross",
    //     category : "Shoes",
    //     images : ["/"],
    //     variants : [
    //         {model: "Cool", color: "red", size : "48"}
    //     ] 
    // }]
    return products
}