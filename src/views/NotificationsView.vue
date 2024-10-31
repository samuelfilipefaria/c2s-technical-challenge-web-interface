<script setup>
import NavBar from "@/components/NavBar.vue"
import NotificationCard from "@/components/NotificationCard.vue"
</script>

<template>
  <NavBar/>
  <v-container class="my-5 text-center">
    <h1>Notifications</h1>

    <v-progress-circular
      v-if="isLoading"
      color="primary"
      indeterminate
      class="my-5 mx-auto d-block"
      size="50"
    ></v-progress-circular>

    <NotificationCard
      v-for="notification in notificationsData"
      :notification-text="notification.notification_text"
    />
  </v-container>
</template>

<script>
  import axios from "axios";

  export default {
    data: () => ({
      isLoading: true,
      notificationsData: []
    }),
    methods: {
      async getNotificationsData() {
        try {
          const response = await axios.get('http://localhost:2000/get_all_notifications', {
            params: { token: localStorage.getItem("jwt_c2s_challenge") },
          });

          this.notificationsData = response.data.notifications || [];
          this.isLoading = false;
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
