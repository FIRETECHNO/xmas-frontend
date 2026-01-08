<script setup lang="ts">

definePageMeta({
  middleware: "admin"
})

</script>

<template>
  <v-container>
    <v-row>

      <v-col cols="12" md="4" lg="3">
        <NuxtLink to="/admin/products/active" class="text-decoration-none">
          <v-sheet class="clickable-sheet d-flex flex-column align-center justify-center pa-6" rounded="lg"
            elevation="6" height="350">
            <v-icon icon="mdi-package-variant" color="primary" size="80" class="mb-4"></v-icon>
            <p class="text-h5 text-md-h4 font-weight-bold text-grey-darken-3">
              Активные товары
            </p>
            <p class="text-body-1 text-grey-darken-1 mt-2">
              Управление активными товарами и их статусами
            </p>
          </v-sheet>
        </NuxtLink>
      </v-col>

      <v-col cols="12" md="4" lg="3">
        <NuxtLink to="/admin/products/archive" class="text-decoration-none">
          <v-sheet class="clickable-sheet d-flex flex-column align-center justify-center pa-6" rounded="lg"
            elevation="6" height="350">
            <v-icon icon="mdi-archive-outline" color="primary" size="80" class="mb-4"></v-icon>
            <p class="text-h5 text-md-h4 font-weight-bold text-grey-darken-3">
              Архивные товары
            </p>
            <p class="text-body-1 text-grey-darken-1 mt-2">
              Просмотр архивированных товаров
            </p>
          </v-sheet>
        </NuxtLink>
      </v-col>
      
      <v-col cols="12" md="4" lg="3">
        <NuxtLink to="/admin/products/edit" class="text-decoration-none">
          <v-sheet class="clickable-sheet d-flex flex-column align-center justify-center pa-6 text-center" rounded="lg"
            elevation="6" height="350">
            <v-icon icon="mdi-pencil-outline" color="primary" size="80" class="mb-4"></v-icon>
            <p class="text-h5 text-md-h4 font-weight-bold text-grey-darken-3">
              Редактировать товар
            </p>
            <p class="text-body-1 text-grey-darken-1 mt-2">
              Изменение параметров и информации товаров
            </p>
          </v-sheet>
        </NuxtLink>
      </v-col>
      
      <v-col cols="12" md="4" lg="3">
        <NuxtLink to="/admin/products/create" class="text-decoration-none">
          <v-sheet class="clickable-sheet d-flex flex-column align-center justify-center pa-6 text-center" rounded="lg"
            elevation="6" height="350">
            <v-icon icon="mdi-plus-circle-outline" color="primary" size="64" class="mb-4"></v-icon>
            <p class="text-h6 text-md-h4 font-weight-bold text-grey-darken-3">
              Создать товар
            </p>
            <p class="text-body-1 text-grey-darken-1 mt-2">
              Добавление новых товаров в каталог
            </p>
          </v-sheet>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.clickable-sheet {
  /* Плавный переход для всех анимируемых свойств */
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.clickable-sheet:hover {
  /* Слегка приподнимаем карточку при наведении */
  transform: translateY(-10px);
  /* Увеличиваем тень для эффекта "глубины" */
  box-shadow: 0px 12px 24px -6px rgba(0, 0, 0, 0.25) !important;
}
</style>