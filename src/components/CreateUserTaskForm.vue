<template>
  <v-sheet class="mx-auto my-15">
    <v-alert
      class="my-10"
      density="compact"
      title="Atention"
      type="warning"
      text="The task description must be unique and not empty!!"
    ></v-alert>
    <v-form fast-fail @submit.prevent>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="description"
              label="Description"
              type="text"
            ></v-text-field>
            <v-btn class="mt-2 bg-light-blue" type="submit" @click="createTask()">Create new task</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script>
  import { createUserTask } from '../lib/requestSender';

  export default {
    data: () => ({
      description: "",
    }),
    methods: {
      async createTask() {
        createUserTask(this.description)
        .then(_ => this.$router.push({ path: "/tasks" }))
        .catch(_ => this.$router.push({ path: "/error" }));
      },
    }
  }
</script>
