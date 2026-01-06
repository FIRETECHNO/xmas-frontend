<script setup lang="ts">
import type {User} from '~/types/user.interface.ts'
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

const router = useRouter();
const auth = useAuth();

let passwordIsVisible = ref(false);
let loading = ref(false);

const schema = yup.object({
    firstName : yup.string().min(2).required(),
    lastName : yup.string().min(3).required(),
    email : yup.string().email().required(),
    password : yup.string().min(8).required(),
});

let {meta, handleSubmit} = useForm({
    validationSchema : schema,
});

const firstName = useField("firstName");
const lastName = useField("lastName");
const email = useField("email");
const password = useField("password");

const onSubmitRegistration = handleSubmit(async values =>{
    loading.value = true;
    try{
        let res = await auth.registration({
            ...values,
            roles : ["user"],
        });

        if (res){
            router.push("/me");
        }
    }catch (error){
        console.log("error registration : ", error);
    }finally{
        loading.value = false;
    }
});
</script>
<template>
    <v-container class="d-flex align-center justify-center">
        <v-col cols="12" xs="12" md="6" lg="4">
            <v-card class="d-flex flex-column justify-center align-center text-center pa-6 pt-4 rounded-lg">
                <div class="font-weight-bold text-h6">Регистрация</div>
                <v-form @submit.prevent="onSubmitRegistration" class="d-flex flex-column w-100 mt-2">
                    <v-text-field label="Имя" type="firstName" placeholder="Иван" v-model="firstName.value.value"
                    :error-messages="firstName.errorMessage.value" variant="underlined" class="w-100">
                    </v-text-field>
                    <v-text-field label="Фамилия" type="lastName" placeholder="Иванов" v-model="lastName.value.value"
                    :error-messages="lastName.errorMessage.value" variant="underlined" class="w-100">
                    </v-text-field>
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
                    <v-btn class="mt-4" type="submit" :disabled="!meta.valid" color="accent" :loading="loading">
                        Зарегистрироваться
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-container>
</template>