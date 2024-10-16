<script setup>
import RegisterForm from "@/components/RegisterForm.vue"
</script>

<template>
  <v-container class="text-center mt-5">
    <v-row>
      <v-col cols="12">
        <h1>Register</h1>
      </v-col>

      <v-col cols="12">
        <RegisterForm/>
      </v-col>

      <v-col cols="12">
        Already have an account? <RouterLink to="/login">Login <v-icon icon="mdi-open-in-new"></v-icon></RouterLink>
      </v-col>
    </v-row>
  </v-container>
</template>
