<script setup>
import TaskCard from "@/components/TaskCard.vue"
</script>

<template>
  <h1>Tasks</h1>
  <TaskCard
    v-for="task in tasksData"
    :description="task.description"
    :task-type="task.task_type"
    :state="task.state"
    :url-for-scraping="task.url_for_scraping"
  />
</template>

<script>
  import axios from "axios";

  export default {
    data: () => ({
      tasksData: []
    }),
    methods: {
      async getTasksData() {
        try {
          const response = await axios.post('http://localhost:3000/tasks/get_all_user_tasks', {
            token: localStorage.getItem("jwt_c2s_challenge"),
          });

          this.tasksData = response.data || [];
        } catch (error) {
          console.error(error);
        }
      },
    },
    mounted() {
      this.getTasksData();
    }
  }
</script>