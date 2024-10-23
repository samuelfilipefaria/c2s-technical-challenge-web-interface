<template>
  <v-card class="my-3">
    <v-row class="my-2 mx-auto">
      <v-col cols="12">
        <h3>The task #{{ taskId }} ({{ taskDescription }}) was {{ operation }} by the user "{{ user.name }}"</h3>
        <h4 class="mt-3">Scraped data: {{ scrapedData }}</h4>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    user: {},
  }),
  props: {
    taskId: String,
    taskDescription: String,
    operation: String,
    scrapedData: String,
    notificationId: String,
  },
  methods: {
    async getNotifications() {
      try {
        const response = await axios.get('http://localhost:3000/tasks/delete', {
          params: {
            token: localStorage.getItem("jwt_c2s_challenge"),
            id: this.taskId,
          }
        });

        this.reloadPage();
      } catch (error) {
        this.$router.push({ path: "/error" });
        console.error(error);
      }
    },
    async getUserData() {
      if (localStorage.getItem("jwt_c2s_challenge")) {
        try {
          const response = await axios.get('http://localhost:5000/users/get_data', {
            params: { token: localStorage.getItem("jwt_c2s_challenge") },
          });

          this.user.name = response.data.name;
          this.user.email = response.data.email;

        } catch (error) {
          console.error(error);
          this.$router.push({ path: "/error" });
        }
      }
    },
  },
  mounted() {
    this.getUserData();
  }
}
</script>
