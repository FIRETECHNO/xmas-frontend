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
          <div class="ml-4">
            {{ user.name }} {{ user.surname }}
          </div>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

    <Footer />
  </v-app>
</template>
