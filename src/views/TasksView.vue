<script setup>
import NavBar from "@/components/NavBar.vue"
import TaskCard from "@/components/TaskCard.vue"
</script>

<template>
  <NavBar/>
  <v-container class="my-5 text-center">
    <h1>Tasks</h1>

    <v-btn class="my-5 bg-light-blue" type="submit" @click="goToTaskCreation()">New task</v-btn>

    <TaskCard
      v-for="task in tasksData"
      :description="task.description"
      :task-type="task.task_type"
      :state="task.state"
      :url-for-scraping="task.url_for_scraping"
      :task-id="task.id"
      @loadTaskData="loadTaskData"
    />
  </v-container>
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
          const response = await axios.get('http://localhost:3000/tasks/get_all_tasks', {
            params: { token: localStorage.getItem("jwt_c2s_challenge") },
          });

          this.tasksData = response.data || [];
        } catch (error) {
          this.$router.push({ path: "/error" });
          console.error(error);
        }
      },
      goToTaskCreation() {
        this.$router.push({ path: "/task-creation" });
      }
    },
    mounted() {
      this.getTasksData();
    }
  }
</script>
