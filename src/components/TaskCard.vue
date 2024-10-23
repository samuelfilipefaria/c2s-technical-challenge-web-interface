<template>
  <v-card
    class="my-3"
    :title="description"
    :subtitle="'Type: ' + taskType + ' | State: ' + state"
    :text="'URL for scraping: ' + urlForScraping"
  >
    <v-row class="my-2 mx-auto">
      <v-col cols="12">
        <v-btn max-width="200" class="bg-light-blue" @click="goToTaskEditionPage()"><v-icon icon="mdi-pencil" size="20"/></v-btn>
        <v-btn max-width="200" class="ml-3 bg-red-accent-3" @click="deleteTask()"><v-icon icon="mdi-trash-can" size="20"/></v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  props: {
    description: String,
    taskType: String,
    state: String,
    urlForScraping: String,
    taskId: String,
  },
  methods: {
    async deleteTask() {
      try {
        const response = await axios.post('http://localhost:3000/tasks/delete', {
          token: localStorage.getItem("jwt_c2s_challenge"),
          task_id: this.taskId,
        });

        this.$emit("taskDeleted");
      } catch (error) {
        console.error(error);
      }
    },
    goToTaskEditionPage() {
      this.$router.push({ path: `/task-edition/${this.taskId}` })
    }
  },
}
</script>