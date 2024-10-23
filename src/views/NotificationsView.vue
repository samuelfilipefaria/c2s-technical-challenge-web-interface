<script setup>
import NavBar from "@/components/NavBar.vue"
import NotificationCard from "@/components/NotificationCard.vue"
</script>

<template>
  <NavBar/>
  <v-container class="my-5 text-center">
    <h1>Notifications</h1>

    <NotificationCard
      v-for="notification in notificationsData"
      :taskId="notification.task_id"
      :taskDescription="notification.task_description"
      :operation="notification.operation"
      :scrapedData="notification.scraped_data"
      :notificationId="notification.id"
    />
  </v-container>
</template>

<script>
  import axios from "axios";

  export default {
    data: () => ({
      notificationsData: []
    }),
    methods: {
      async getNotificationsData() {
        try {
          const response = await axios.get('http://localhost:2000/get_all_notifications', {
            params: { token: localStorage.getItem("jwt_c2s_challenge") },
          });

          this.notificationsData = response.data || [];
          console.log(this.notificationsData);
        } catch (error) {
          this.$router.push({ path: "/error" });
          console.error(error);
        }
      },
    },
    mounted() {
      this.getNotificationsData();
    }
  }
</script>
