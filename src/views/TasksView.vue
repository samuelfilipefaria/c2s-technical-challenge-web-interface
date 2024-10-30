<script setup>
import NavBar from "@/components/NavBar.vue"
import UserTaskCard from "@/components/UserTaskCard.vue"
import WebScrapingTaskCard from "@/components/WebScrapingTaskCard.vue";
</script>

<template>
  <NavBar/>
  <v-container class="my-5 text-center">
    <h1>Tasks</h1>

    <v-btn class="my-5 mr-5 bg-light-blue" type="submit" @click="goToUserTaskCreation()">New task</v-btn>
    <v-btn class="my-5 bg-light-blue" type="submit" @click="goToWebScrapingTaskCreation()">New web scraping task</v-btn>

    <div v-for="task in tasksData">

      <UserTaskCard
        v-if="task.description"
        :description=task.description
        :state=task.state
        :task-id="task.id"
        @updateTasksList="getTasksData"
      />

      <WebScrapingTaskCard
        v-else
        :url-for-scraping="task.url_for_scraping"
        :state=task.state
        :task-id="task.id"
        @updateTasksList="getTasksData"
      />

    </div>
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

          this.tasksData = response.data;
        } catch (error) {
          this.$router.push({ path: "/error" });
          console.error(error);
        }
      },
      goToUserTaskCreation() {
        this.$router.push({ path: "/user-task-creation" });
      },
      goToWebScrapingTaskCreation() {
        this.$router.push({ path: "/web-scraping-task-creation" });
      },
    },
    mounted() {
      this.getTasksData();
    }
  }
</script>
