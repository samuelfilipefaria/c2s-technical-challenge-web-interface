<script setup>
import TaskList from "@/components/TaskList.vue"
import TaskForm from "@/components/TaskForm.vue"
</script>

<template>
  <v-container class="text-center mt-5">
    <v-row>
      <v-col cols="12">
        <h1>Home</h1>
      </v-col>

      <v-col cols="12" v-if="user.name == '' || user.email == ''">
        Don't have an account yet? <RouterLink to="/register">Register <v-icon icon="mdi-open-in-new"></v-icon></RouterLink>
        <br>
        Already have an account? <RouterLink to="/login">Login <v-icon icon="mdi-open-in-new"></v-icon></RouterLink>
      </v-col>

      <v-col cols="12" v-else>
        <h3>Welcome {{ user.name }} ({{ user.email }})!</h3>
        <v-btn max-width="200" class="mt-2 mr-2 bg-light-blue" @click="goToEditionPage()">Edit account</v-btn>

        <v-tooltip text="Are you sure you want to delete your account?" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn max-width="200" class="mt-2 mr-2 bg-red-accent-3" @click="deleteUser()" v-bind="props">Delete account</v-btn>
          </template>
        </v-tooltip>

        <v-btn max-width="200" class="mt-2 mr-2 bg-light-blue" @click="logoutUser()">Logout</v-btn>

        <TaskForm @taskCreated="reloadPage()"/>
        <TaskList @taskDeleted="reloadPage()"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from "axios";

  export default {
    data: () => ({
      user: {
        name: "",
        email: ""
      }
    }),
    methods: {
      async getUserData() {
        if (localStorage.getItem("jwt_c2s_challenge")) {
          try {
            const response = await axios.post('http://localhost:5000/users/get_data', {
              token: localStorage.getItem("jwt_c2s_challenge"),
            });

            this.user.name = response.data.name;
            this.user.email = response.data.email;

          } catch (error) {
            console.error(error);
          }
        }
      },
      logoutUser() {
        localStorage.clear();
        reloadPage();
      },
      async deleteUser() {
        try {
          const response = await axios.post('http://localhost:5000/users/destroy', {
            token: localStorage.getItem("jwt_c2s_challenge"),
          });

          this.logoutUser();
        } catch (error) {
          console.error(error);
        }
      },
      goToEditionPage() {
        this.$router.push({path: "/edition"});
      },
      reloadPage() {
        location.reload();
      }
    },
    mounted() {
      this.getUserData();
    }
  }
</script>
