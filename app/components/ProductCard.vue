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
<v-container class="h-75 d-flex align-start">
    <v-card variant="tonal" elevation="4" class="w-100 h-100">
        <v-container style="padding: 0;" class="h-100">
            <v-col class="h-100">
                <v-row cols="12" class="h-75">
                    <NuxtLink class="w-100 h-100" :to= "{name : 'products-productId', params : {productId : product._id}}" style="margin: 0px;">
                        <img cover :src="product.images[0]" class="w-100 h-100">
                        <img>    
                    </NuxtLink>  
                </v-row>
                <v-row class="justify-start">
                    <v-card-title>
                    {{ product.name }}
                    </v-card-title>
                </v-row>
                <v-row class="justify-center align-start ma-0">
                    <v-card-actions class="w-auto justify-center">
                        <v-btn class="w-auto pa-1" ripple variant="flat" @click="addToCart"><p style="font-size: 11px;">Добавить в корзину</p></v-btn>
                    </v-card-actions>
                </v-row>
            </v-col>
        </v-container>
    </v-card>
</v-container>
</template>