<script setup lang="ts">
import { useProductMainPage } from '~/composables/useProductMainPage';


let products = useProductMainPage();



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

      <v-col cols="12" v-for="product of products" :key="product._id" v-if="products.values.length">
        <h1> Название : {{ product.name }}, Категория : {{ product.category }}</h1>
      </v-col>
      <h1 v-else> Товары отсутствуют</h1>
    </v-row>
  </v-container>
</template>