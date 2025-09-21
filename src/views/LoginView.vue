<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { isAuthenticated } from '@/router'

const router = useRouter()

const error = ref(null)

const success = ref(null)

const formData = ref({
  username: '',
  password: ''
})

const clearForm = () => {
  formData.value = {
    username: '',
    password: ''
  }
}

const submitForm = () => {
  validateDetails(true)

  if (error.value === null) {
    isAuthenticated.value = true
    setTimeout(() => {
      clearForm()
      router.push({path: '/'})
    }, 2000)
    return
  }
}

const validateDetails = (show) => {
  const username = 'abc123'
  const password = '@Bc123'

  if (show) {
    if (formData.value.username == username && formData.value.password == password) {
      error.value = null
      success.value = 'Login successful! Redirecting to home page...'
    } else {
      error.value = 'Username or password provided is incorrect'
    }
  } else {
    error.value = null
  }
}
</script>

<template>
  <div class="container mt-5 center">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">Login Page</h1>
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-md-6 col-sm-6 offset-3">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                @input="() => validateDetails(false)"
                v-model="formData.username"
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6 col-sm-6 offset-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                @input="() => validateDetails(false)"
                v-model="formData.password"
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="text-center">
              <button type="submit" class="btn btn-primary me-2">Submit</button>
              <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
              <div v-if="error" class="text-danger">{{ error }}</div>
              <div v-if="success" class="text-success">{{ success }}</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Class selectors */
.form {
  text-align: center;
  margin-top: 50px;
}

/* ID selectors */
#username:focus,
#password:focus,
#isAustralian:focus,
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-header {
  background-color: #275fda;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}
.list-group-item {
  padding: 10px;
}
</style>
