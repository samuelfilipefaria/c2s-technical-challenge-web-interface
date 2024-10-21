<template>
<v-sheet class="mx-auto" width="300">
  <v-form fast-fail @submit.prevent>
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

    <v-btn class="mt-2 bg-light-blue" type="submit" block @click="loginUser()">Login</v-btn>
  </v-form>
</v-sheet>
</template>

<script>
  import axios from "axios";

  export default {
    data: () => ({
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
      password: '123',
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
      async loginUser() {
        try {
          const {data} = await axios.post('http://localhost:5000/users/login', {
            email: this.email,
            password: this.password,
          });

          localStorage.setItem("jwt_c2s_challenge", data.token);
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
</script>
