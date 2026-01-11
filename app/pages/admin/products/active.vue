<script setup lang="ts">

definePageMeta({
  middleware: "admin"
})

const router = useRouter();

let productAdminStore = useProductAdmin();
let productsActive = productAdminStore.productsActive;

function toPageEdit(_id : string){
  router.push({path : '/admin/products/edit', query : {id : _id}})
}

await productAdminStore.getAllProductsActive();
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Активные товары</h1>
      </v-col>
      <v-col cols="6" md="4" lg="2" v-for="product of productsActive" :key="product._id" v-if="productsActive.length">
        <ProductCardAdmin :product="product" @toPageEdit="toPageEdit"/>
      </v-col>
      <v-col v-else>
        <h1>Товары отсутствуют</h1>
      </v-col> 
    </v-row>
  </v-container>
</template>