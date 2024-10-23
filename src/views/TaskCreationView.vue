<script setup>
import CreateTaskForm from "@/components/CreateTaskForm.vue"
</script>

<template>
  <v-container class="text-center mt-5">
    <v-row>
      <v-col cols="12">
        <h1>Create task</h1>
      </v-col>

      <v-col cols="12">
        <CreateTaskForm/>
      </v-col>
    </v-row>
  </v-container>
</template>
