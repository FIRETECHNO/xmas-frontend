<script lang="ts" setup>

const productId = useRoute().params.productId;

let productStore = useProducts();

let product = productStore.currentProduct;

productStore.getProduct(productId!.toString());

let focusImage = ref(product.value?.images[0])

</script>
<template>
    
    <v-container v-if="product">
        <v-row>
            <v-col cols="2">
                <ul v-for="image in product.images" :key="image" style="list-style-type: none;">
                    <li class="mt-1" @hover="focusImage = image" hover><v-img class="rounded-sm" :src="image" ></v-img></li>
                </ul>
            </v-col>
            <v-col cols="10" md="8" lg="6">
                <v-img :src="focusImage" alt="" ></v-img>
            </v-col>
        </v-row>
    </v-container>
    <h1 v-else class="text-center">Товар отсутствует</h1>
</template>