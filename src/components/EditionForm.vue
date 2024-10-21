<template>
  <v-sheet class="mx-auto" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Name"
        type="text"
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        type="email"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        type="password"
      ></v-text-field>

      <v-btn class="mt-2 bg-light-blue" type="submit" block @click="editUser()">Edit account data</v-btn>
    </v-form>
  </v-sheet>
  </template>

  <script>
    import axios from "axios";

    export default {
      data: () => ({
        name: '',
        nameRules: [
          value => {
            if (value.trim()) return true

            return 'Name is required'
          },
        ],
        email: '',
        emailRules: [
          value => {
            if (value.trim()) return true

            return 'E-mail is required'
          },
          value => {
            if (/.+@.+\..+/.test(value)) return true

            return 'E-mail must be valid'
          },
        ],
        password: '',
        passwordRules: [
          value => {
            if (value.trim()) return true

            return 'Password is required.'
          },
          value => {
            if (value.length >= 8) return true

            return 'Min 8 characters'
          },
        ],
      }),
      methods: {
        async editUser() {
          try {
            const {data} = await axios.post('http://localhost:5000/users/edit', {
              token: localStorage.getItem("jwt_c2s_challenge"),
              name: this.name,
              email: this.email,
              password: this.password,
            });

            this.$router.push({ path: '/' })
          } catch (error) {
            console.error(error);
          }
        }
      }
    }
  </script>
