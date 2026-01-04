import { prevDay } from "vuetify/lib/components/VCalendar/util/timestamp.mjs";
import type { IProductDb } from "~/types/IProduct.interface";

export function useProducts(){


    let products = useState<IProductDb[]>(() => []);

    let currentProduct = useState<IProductDb | undefined>();
    // Затычки для примера
    products.value = [{
        _id : "1233434",
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
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg", "https://ir.ozone.ru/s3/multimedia-o/c1000/6699087852.jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },{
        _id : "1234",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },
    {
        _id : "1235",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },{
        _id : "1236",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },
    {
        _id : "1237",
        name : "Crossfddddsdsfsdfsddssdafafda",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },{
        _id : "1238",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },
    {
        _id : "1239",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },{
        _id : "1230",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },
    {
        _id : "1231",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },{
        _id : "1232",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    },
    {
        _id : "1230-0",
        name : "Cross",
        category : "Shoes",
        images : ["https://stockmann.ru/pi/pp/783/5399783/5399783-04.jpg@jpg"],
        variants : [
            {model: "Cool", color: "red", size : "48"}
        ] 
    }]
    // async function getAllProducts(){
    //     try{
    //         let res = await $fetch<IProductDb[]>("", {method : "GET"})
    //         products.value = res
    //     } catch (error){
    //         console.log("useProduct/getAllProducts", error)
    //     }
    // }

    async function getProduct(_id : string){
        for(let i = 0; i < products.value.length; i++){
            if (products.value[i]?._id == _id){
                currentProduct.value = products.value[i]
            }
        }
    }

    return {
        products, currentProduct,
        getProduct
    }
}