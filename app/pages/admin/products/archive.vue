<script setup lang="ts">

definePageMeta({
  middleware: "admin"
})

const router = useRouter();

let productAdminStore = useProductAdmin();
let productsArchive = productAdminStore.productsArchive;

function toPageEdit(_id : string){
  router.push({path : '/admin/products/edit', query : {id : _id}})
}
await productAdminStore.getAllProductsArchive();
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Архивные товары</h1>
      </v-col>
      <v-col cols="6" md="4" lg="2" v-for="product of productsArchive" :key="product._id" v-if="productsArchive.length">
        <ProductCardAdmin :product="product" @toPageEdit="toPageEdit"/>
      </v-col>
      <v-col v-else>
        <h1>Товары отсутствуют</h1>
      </v-col> 
    </v-row>
  </v-container>
</template>