<script setup lang="ts">

import {useField, useForm} from 'vee-validate';
import * as yup from 'yup';
definePageMeta({
  middleware: "admin"
})

const productAdminStore = useProductAdmin();

let isSuccess = ref(false);
let isResult = ref(false);
let loading = ref(false);

const schema = yup.object({
  name : yup.string().required(),
  category : yup.string().required(),
  images : yup.string().url().required(),
  model : yup.string().required(),
  color : yup.string().required(),
  size : yup.string().required()
})

let {meta, handleSubmit} = useForm({
  validationSchema : schema
})

const name = useField("name");
const category = useField("category");
const images = useField("images");
const model = useField("model");
const color = useField("color");
const size = useField("size");

const onSubmitCreateProduct = handleSubmit(async values => {
  loading.value = true;
  const res = await productAdminStore.createProduct(
    values.name,
    values.category,
    values.images,
    values.model,
    values.color,
    values.size
  )
  if(res){
    isSuccess.value = true;
  }
  else{
    isSuccess.value = false;
  }
  isResult.value = true;
  loading.value = false;
});
</script>

<template>
  <v-container class="d-flex align-center justify-center">
    <v-col cols="12" xs="12" md="6" lg="4">
      <v-card class="d-flex flex-column justify-center align-center text-center pa-6 pt-4 rounded-lg">
        <div class="font-weight-bold text-h6" > Создать товар</div>
        <v-form @submit.prevent="onSubmitCreateProduct" class="d-flex flex-column w-100 mt-3">
          <v-text-field label="Название" type="text" placeholder="Кроссовки" v-model="name.value.value"
          :error-messages="name.errorMessage.value" variant="underlined" class="w-100">
          </v-text-field>
          <v-text-field label="Категория" type="text" placeholder="Обувь" v-model="category.value.value"
          :error-messages="category.errorMessage.value" variant="underlined" class="w-100">
          </v-text-field>
          <v-text-field label="Ссылка на изображения" type="text" placeholder="https://api-getImages.ru/id-product" v-model="images.value.value"
          :error-messages="images.errorMessage.value" variant="underlined" class="w-100">
          </v-text-field>
          <div class="font-weight-bold text-h6"> Добавить базовую модель</div>
          <v-text-field label="Модель" type="text" placeholder="Модель1" v-model="model.value.value"
          :error-messages="model.errorMessage.value" variant="underlined" class="w-100">
          </v-text-field>
          <v-text-field label="Цвет" type="text" placeholder="Белый" v-model="color.value.value"
          :error-messages="color.errorMessage.value" variant="underlined" class="w-100">
          </v-text-field>
          <v-text-field label="Размер" type="text" placeholder="м" v-model="size.value.value"
          :error-messages="size.errorMessage.value" variant="underlined" class="w-100">
          </v-text-field>
          <v-btn class="mt-4" type="submit" :disabled="!meta.valid" color="accent" :loading="loading">
            Создать товар
          </v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-container>
  <v-dialog
      v-model="isResult"
      width="auto"
    >
      <v-card
        max-width="300"
        prepend-icon="mdi-end"
        :text="isSuccess ? 'Товар создан' : 'Ошибка при создании товара'"
      >
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="isResult = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>