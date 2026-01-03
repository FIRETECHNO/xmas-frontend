import type {IProductDb} from "~/types/IProduct.interface";
export function useProductMainPage(){
    let products = useState<IProductDb[]>(() => []);

    // Затычки для примера
    products.value = [{
        _id : "123",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },
    {
        _id : "123",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },{
        _id : "123",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },
    {
        _id : "123",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },{
        _id : "123",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },
    {
        _id : "123",
        name : "Crossfddd",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },{
        _id : "123",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },
    {
        _id : "123",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },{
        _id : "123",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },
    {
        _id : "123",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },{
        _id : "123",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },
    {
        _id : "123",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    }]

    console.log(products.value[0])
    return { products }
}