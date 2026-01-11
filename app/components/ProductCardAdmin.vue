<script lang="ts" setup>
import type { IProductDb } from '~/types/IProduct.interface';


const props = defineProps<{
    product : IProductDb
}>()

let product = props.product;

const emit = defineEmits(["addToArchive", "toPageEdit"])

function addToArchive(){
    emit("addToArchive", product._id)
}

function toPageEdit(){
    emit("toPageEdit", product._id);
}

</script>
<template>
<v-container class="h-75 d-flex align-start">
    <v-card variant="tonal" elevation="4" class="w-100 h-100">
        <v-container style="padding: 0;" class="h-100">
            <v-col class="h-100">
                <v-row cols="12" class="h-50">
                    <img cover :src="product.images[0]" class="w-100 h-100">
                    <img>    
                </v-row>
                <v-row class="justify-start">
                    <v-card-title>
                    {{ product.name }}
                    </v-card-title>
                </v-row>
                <v-row class="justify-center align-start ma-0">
                    <v-card-actions class="w-auto justify-center">
                        <v-btn class="w-auto pa-1" ripple variant="flat" @click="addToArchive"><p style="font-size: 11px;">Добавить в архив</p></v-btn>
                    </v-card-actions>
                    <!-- Когда появится возможность отслеживать статус товара, карточка будет допилина -->
                </v-row>
                <v-row class="justify-center align-start ma-0">
                    <v-card-actions class="w-auto justify-center">
                        <v-btn class="w-auto pa-1" ripple variant="flat" @click="toPageEdit"><p style="font-size: 11px;">Редактировать</p></v-btn>
                    </v-card-actions>
                </v-row>
            </v-col>
        </v-container>
    </v-card>
</v-container>
</template>