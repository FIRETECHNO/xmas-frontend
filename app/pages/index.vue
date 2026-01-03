<script setup lang="ts">
import { useProductMainPage } from '~/composables/useProductMainPage';


let productMainPage = useProductMainPage();

let products = productMainPage.products;



</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Каталог</h1>
      </v-col>

      <v-col cols="12">
        Категории списком тут выбираем и в зависимости от категории отображаем товары
      </v-col>

      <v-col cols="6" md="3" lg="2" v-for="product of products" :key="product._id" v-if="products.length">
        <ProductCard :product="product"/>
        <!-- <h1> Название : {{ product.name }}, Категория : {{ product.category }}</h1> -->
      </v-col>
      <h1 v-else>Товары отсутствуют</h1>
    </v-row>
  </v-container>
</template>