<template>
  <v-container v-if="isUserLoged">
    <v-row class="text-center">
      <v-col cols="4">
        <RouterLink class="menu-link" to="/account"><v-btn variant="text">Account</v-btn></RouterLink>
      </v-col>
      <v-col cols="4">
        <RouterLink class="menu-link" to="/tasks"><v-btn variant="text">Tasks</v-btn></RouterLink>
      </v-col>
      <v-col cols="4">
        <RouterLink class="menu-link" to="/notifications"><v-btn variant="text">Notifications</v-btn></RouterLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from "axios";

  export default {
    data: () => ({
      isUserLoged: false,
    }),
    methods: {
      async getUserData() {
        const response = await axios.get('http://localhost:5000/users/get_data', {
          params: { token: localStorage.getItem("jwt_c2s_challenge") },
        });

        if (response.data) this.isUserLoged = true;
      },
    },
    mounted() {
      this.getUserData();
    }
  }
</script>
