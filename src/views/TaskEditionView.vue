<script setup>
import EditTaskForm from "@/components/EditTaskForm.vue"
</script>

<template>
  <v-container class="text-center mt-5">
    <v-row>
      <v-col cols="12">
        <h1>Edit task</h1>
      </v-col>

      <v-col cols="12">
        <EditTaskForm
          v-if="!isLoading"
          :description="task.description"
          :task-type="task.task_type"
          :state="task.state"
          :url-for-scraping="task.url_for_scraping"
          :task-id="task.id"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from "axios";

  export default {
    data: () => ({
      isLoading: true,
      task: {},
    }),
    methods: {
      async getTaskData() {
        try {
          const {data} = await axios.get('http://localhost:3000/tasks/get_a_task', {
            params: {
              token: localStorage.getItem("jwt_c2s_challenge"),
              id: this.$route.params.taskId,
            }
          });

          this.task = data;
          this.isLoading = false;
        } catch (error) {
          this.$router.push({ path: "/error" });
          console.error(error);
        }
      }
    },
    mounted() {
      this.getTaskData();
    }
  }
</script>
