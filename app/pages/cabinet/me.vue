<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
const auth = useAuth();

</script>

<template>
  <v-btn>
    Тест
  </v-btn>
  <v-btn @click="auth.logout()">
    Выйти
  </v-btn>
</template>