<template>
  <v-card
    class="my-3"
    :title="description"
    :subtitle="'Type: ' + taskType + ' | State: ' + state"
    :text="'URL for scraping: ' + urlForScraping"
  >
    <template v-slot:actions>
      <v-tooltip text="Are you sure you want to delete this task?" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn max-width="200" class="mt-2 mx-auto bg-red-accent-3" @click="deleteTask()" v-bind="props"><v-icon icon="mdi-trash-can" size="20"/></v-btn>
        </template>
      </v-tooltip>
    </template>
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
  },
}
</script>