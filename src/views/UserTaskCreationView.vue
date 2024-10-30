<script setup>
import CreateUserTaskForm from "@/components/CreateUserTaskForm.vue"
</script>

<template>
  <v-container class="text-center mt-5">
    <v-row>
      <v-col cols="12">
        <h1>Create task</h1>
      </v-col>

      <v-col cols="12">
        <CreateUserTaskForm/>
      </v-col>
    </v-row>
  </v-container>
</template>
