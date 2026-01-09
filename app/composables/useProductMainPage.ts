import ProductApi from "~/api/ProductApi"
import type {IProductDb} from "~/types/IProduct.interface";
export function useProductMainPage(){

    let products = useState<IProductDb[]>(() => []);
    let currentProduct = useState<IProductDb | undefined>();
    
    async function getAllProducts() : Promise<void>{
        try{
            const res = await ProductApi.getAll()
            if (res.length != 0){
                products.value = res;
            }
        }
        catch(error){
            console.log("useProductMainPage/getAllProducts", error);
        }
    }
    //     // Временная затычка до появления эндпоинта на получение всех продуктов из БД
    //     products.value = [{
    //     _id : "1233434",
    //     name : "Cross",
    //     category : "Shoes",
    //     images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg", "https://ir.ozone.ru/s3/multimedia-o/c1000/6699087852.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_NaG4eiwNBEhJ2mmzc5mWNcpvgKqv8Q0SsQ&s","https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
    //     variants : [
    //         {model: "Cool", color: "red", size : "48"}
    //     ] 
    // },
    // {
    //     _id : "123",
    //     name : "Cross",
    //     category : "Shoes",
    //     images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
    //     variants : [
    //         {model: "Cool", color: "red", size : "48"}
    //     ] 
    // },{
    //     _id : "123",
    //     name : "Cross",
    //     category : "Shoes",
    //     images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
    //     variants : [
    //         {model: "Cool", color: "red", size : "48"}
    //     ] 
    // },
    // {
    //     _id : "123",
    //     name : "Cross",
    //     category : "Shoes",
    //     images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
    //     variants : [
    //         {model: "Cool", color: "red", size : "48"}
    //     ] 
    // },{
    //     _id : "123",
    //     name : "Cross",
    //     category : "Shoes",
    //     images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
    //     variants : [
    //         {model: "Cool", color: "red", size : "48"}
    //     ] 
    // },
    // {
    //     _id : "123",
    //     name : "Crossfddddsdsfsdfsddssdafafda",
    //     category : "Shoes",
    //     images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
    //     variants : [
    //         {model: "Cool", color: "red", size : "48"}
    //     ] 
    // },{
    //     _id : "123",
    //     name : "Cross",
    //     category : "Shoes",
    //     images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
    //     variants : [
    //         {model: "Cool", color: "red", size : "48"}
    //     ] 
    // },
    // {
    //     _id : "123",
    //     name : "Cross",
    //     category : "Shoes",
    //     images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
    //     variants : [
    //         {model: "Cool", color: "red", size : "48"}
    //     ] 
    // },{
    //     _id : "123",
    //     name : "Cross",
    //     category : "Shoes",
    //     images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
    //     variants : [
    //         {model: "Cool", color: "red", size : "48"}
    //     ] 
    // },
    // {
    //     _id : "123",
    //     name : "Cross",
    //     category : "Shoes",
    //     images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
    //     variants : [
    //         {model: "Cool", color: "red", size : "48"}
    //     ] 
    // },{
    //     _id : "123",
    //     name : "Cross",
    //     category : "Shoes",
    //     images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
    //     variants : [
    //         {model: "Cool", color: "red", size : "48"}
    //     ] 
    // },
    // {
    //     _id : "123",
    //     name : "Cross",
    //     category : "Shoes",
    //     images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
    //     variants : [
    //         {model: "Cool", color: "red", size : "48"}
    //     ] 
    // }]
    // }
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