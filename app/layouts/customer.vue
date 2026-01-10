<script setup lang="ts">

const router = useRouter();
const userStore = useAuth();

let dialog = ref(false);
let { user } = useAuth();

// заглушка
const itemsCount = 10;


async function logOut() {
  dialog.value = false;
  await userStore.logout();
}
</script>

<template>
  <v-app>
    <v-app-bar flat border>
      <v-container class="d-flex align-center">
        <NuxtLink to="/" class="text-decoration-none text-high-emphasis">
          <div class="font-weight-bold text-h6">XMAS Store</div>
        </NuxtLink>

        <v-spacer></v-spacer>

        <div class="d-flex align-center">
          <div v-if="itemsCount > 0">
            <v-badge location="top right" color="primary" :content="itemsCount">
              <NuxtLink to="/cabinet/cart" class="text-decoration-none text-high-emphasis">
                <v-icon>mdi-cart</v-icon>
              </NuxtLink>
            </v-badge>
          </div>
          <div v-else>
            <button>
              <v-icon>mdi-cart</v-icon>
            </button>
          </div>
          <v-menu location="bottom">
            <template #activator="{ props }">
              <v-btn v-bind="props" class="ml-4">
                <div>{{ user?.name }} {{ user?.surname }}</div>
              </v-btn>
            </template>
            <v-card min-width="200">
              <v-list>
                <v-list-item @click="router.push('/cabinet/me')" prepend-icon="mdi-account-edit" title="Личный кабинет" />
                <v-list-item @click="router.push('/cabinet/cart')" prepend-icon="mdi-cart" title="Корзина" />
                <v-divider class="my-2"></v-divider>
                <v-list-item @click="logOut" prepend-icon="mdi-logout" title="Выйти" />
              </v-list>
            </v-card>
          </v-menu>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

    <Footer />
  </v-app>
</template>
