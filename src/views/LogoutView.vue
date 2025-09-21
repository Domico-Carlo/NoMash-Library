<template>
  <h1>Log Out</h1>
  <p>Current user : {{ auth.currentUser.email }}</p>
  <p><button @click="signout">Sign out</button></p>
</template>

<script setup>
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
const router = useRouter()
const auth = getAuth()

const signout = () => {
  signOut(auth)
  .then((data) => {
    console.log("Firebase Sign-out Successful!");
    router.push("/");
  }).catch((error) => {
    console.log(error.code);
  });
}
</script>