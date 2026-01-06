<script setup lang="ts">

const productId = useRoute().params.productId?.toString();

let productStoreMainPage = useProductMainPage();

productStoreMainPage.getProduct(productId!);
let product = productStoreMainPage.currentProduct;

let focusImage = ref(product.value?.images[0]);

await productStoreMainPage.getAllProducts();

</script>
<template>
    
    <v-container v-if="product">
        <v-row>
            <v-col cols="4" lg="2" md="2">
                <ul style="list-style-type: none;" class="h-100" >
                    <li v-for="image in product.images" :key="image" class="mb-1 h-25 pa-0 w-auto border-md rounded-lg cursor-pointer" @mouseenter="focusImage = image" hover>
                        <v-img cover class="rounded-lg h-100 w-100" :src="image" >
                        </v-img>
                    </li>
                </ul>
            </v-col>
            <v-col cols="8" md="8" lg="6" class="rounded-lg pa-0 mt-3">
                <v-img cover class="d-flex flex-column justify-center align-start border-md h-75 w-100 rounded-lg" :src="focusImage" alt="" ></v-img>
            </v-col>
        </v-row>
    </v-container>
    <h1 v-else class="text-center">Товар отсутствует</h1>
</template>