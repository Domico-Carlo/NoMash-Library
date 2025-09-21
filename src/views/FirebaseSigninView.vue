<template>
  <h1>Log in to Firebase</h1>
  <p><input type="text" placeholder="Email" v-model="email"/></p>
  <p><input type="text" placeholder="Password" v-model="password"/></p>
  <p><button @click="signin">Sign-in to Firebase</button></p>
  <p><button @click="signupRedirect">Sign-up</button></p>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { roles } from '@/main';

const email = ref("");
const password = ref("");
const router = useRouter()
const auth = getAuth()
const signin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((data) => {
    console.log("Firebase Sign-in Successful!");
    router.push("/");
    console.log(`Current User: ${auth.currentUser.email}\nRole: ${roles.value[email.value]}`)
  }).catch((error) => {
    console.log(error.code);
  });
}

const signupRedirect = () => {
  router.push("/FireRegister")
}
</script>