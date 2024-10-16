<script setup>
import LoginForm from "@/components/LoginForm.vue"
</script>

<template>
  <v-container class="text-center mt-5">
    <v-row>
      <v-col cols="12">
        <h1>Login</h1>
      </v-col>

      <v-col cols="12">
        <LoginForm/>
      </v-col>

      <v-col cols="12">
        Don't have an account yet? <RouterLink to="/register">Register</RouterLink>
      </v-col>
    </v-row>
  </v-container>
</template>
