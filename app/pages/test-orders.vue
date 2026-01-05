
<script setup lang="ts">
import { useOrders } from '~/composables/useOrders'

const orderId = ref('')
const customer = ref('')
const products = ref('')
const result = ref('')

const { createOrder, editOrder, deleteOrder } = useOrders()

const parsedProducts = computed(() =>
  products.value
    .split(',')
    .map(p => p.trim())
    .filter(Boolean)
)

const handleCreate = async () => {
  const res = await createOrder({
    customer: customer.value,
    products: parsedProducts.value,
  })
  result.value = res ? JSON.stringify(res, null, 2) : 'Ошибка'
}

const handleEdit = async () => {
  const res = await editOrder(orderId.value, {
    customer: customer.value,
    products: parsedProducts.value,
  })
  result.value = res ? JSON.stringify(res, null, 2) : 'Ошибка'
}

const handleDelete = async () => {
  const res = await deleteOrder(orderId.value)
  result.value = res ? JSON.stringify(res, null, 2) : 'Ошибка'
}
</script>


<template>
  <v-container class="py-10">
    <v-row>
      <v-col cols="12">
        <h1>Тест OrderAPI</h1>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field v-model="orderId" label="ID заказа (для редактирования/удаления)" variant="outlined" density="comfortable" />
        <v-text-field v-model="customer" label="ID покупателя" variant="outlined" density="comfortable" class="mt-3" />
        <v-text-field v-model="products" label="ID продуктов (через запятую)" variant="outlined" density="comfortable" class="mt-3" />

        <div class="d-flex ga-3 mt-4">
          <v-btn @click="handleCreate">Создать</v-btn>
          <v-btn @click="handleEdit">Изменить</v-btn>
          <v-btn @click="handleDelete">Удалить</v-btn>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <v-sheet rounded="lg" class="pa-4" color="grey-lighten-4" v-if="result">
          <pre class="text-body-2 mb-0">{{ result }}</pre>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
