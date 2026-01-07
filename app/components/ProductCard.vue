<script lang="ts" setup>
import type { IProductDb } from '~/types/IProduct.interface';


const props = defineProps<{
    product : IProductDb
}>()

let product = props.product;

const emit = defineEmits(["add-to-cart"])

function addToCart(){
    emit("add-to-cart", product._id)
}
</script>
<template>
<v-container>
    <v-card variant="tonal" elevation="4">
        <v-container style="padding: 0;">
            <v-col>
                <v-row>
                    <NuxtLink :to= "{name : 'products-productId', params : {productId : product._id}}" style="margin: 0px;">
                        <img cover :src="product.images[0]" class="w-100 h-100">
                        <img>    
                    </NuxtLink>  
                </v-row>
                <v-row class="justify-start">
                    <v-card-title>
                    {{ product.name }}
                    </v-card-title>
                </v-row>
                <v-row class="justify-center">
                    <v-card-actions class="w-auto justify-center">
                        <v-btn class="w-auto" ripple variant="flat" @click="addToCart"><p style="font-size: 11px;">Добавить в корзину</p></v-btn>
                    </v-card-actions>
                </v-row>
            </v-col>
        </v-container>
    </v-card>
</v-container>
</template>