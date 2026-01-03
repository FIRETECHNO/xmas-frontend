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
    <v-card variant="tonal" elevation="4" hover>
        <v-container>
            <v-col>
                <v-row rows="6">
                    <v-img :src="product.images[0]">
                    </v-img>
                </v-row>
                <v-row rows="2" class="justify-start">
                    <v-card-title style="padding: 0;">
                    {{ product.name }}
                    </v-card-title>
                </v-row>
                <v-row rows="4" class="justify-center">
                    <v-card-actions>
                        <v-btn variant="flat" @click="addToCart"><p style="font-size: 11px;">Добавить в корзину</p></v-btn>
                    </v-card-actions>
                </v-row>
            </v-col>
        </v-container>
    </v-card>
</v-container>
</template>
