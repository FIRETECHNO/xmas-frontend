<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

const router = useRouter();
const auth = useAuth();

let passwordIsVisible = ref(false);
let loading = ref(false);

const schema = yup.object({
    email : yup.string().email().required(),
    password : yup.string().min(8).required(),
})

const {meta, handleSubmit} = useForm({
    validationSchema : schema
});

const email = useField("email");
const password = useField("password");

const onSubmitLogin = handleSubmit(async values => {
    loading.value = true;

    let res = await auth.login(values.email, values.password);

    loading.value = false;

    if(res?.status?.value == "success"){
        router.push("/me");
    }
})

</script>
<template>
    <v-container class="d-flex align-center justify-center">
        <v-col cols="12" xs="12" md="6" lg="4">
            <v-card class="d-flex flex-column justify-center align-center text-center pa-6 pt-4 rounded-lg">
                <div class="font-weight-bold text-h6">Вход</div>
                <v-form @submit.prevent="onSubmitLogin" class="d-flex flex-column w-100 mt-2">
                    <v-text-field label="Электронная почта" type="email" placeholder="ivanivanov@ya.ru" v-model="email.value.value"
                    :error-messages="email.errorMessage.value" variant="underlined" class="w-100">
                    </v-text-field>

                    <v-text-field class="w-100" label="Пароль" v-model="password.value.value" 
                    :append-inner-icon="passwordIsVisible ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append-inner="passwordIsVisible = !passwordIsVisible" 
                    :type="!passwordIsVisible ? 'password' : 'text'"
                    :error-messages="password.errorMessage.value"
                    variant="underlined">
                    </v-text-field>

                    <v-btn class="mt-4" type="submit" :disabled="!meta.valid" color="accent">
                        Войти
                    </v-btn>
                </v-form>
                <NuxtLink to="/registration" style="color: black;" :loading="loading"
                class="w-100 cursor-pointer text-body-2 text-center font-weight-semibold pa-1 mt-4 text-decoration-none">
                Регистрация
                </NuxtLink>
            </v-card>
        </v-col>
    </v-container>
</template>

<style scoped>
</style>