<template>
<v-sheet class="mx-auto" width="300">
  <v-form fast-fail @submit.prevent>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      type="text"
    ></v-text-field>

    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Password"
      type="password"
    ></v-text-field>

    <v-btn class="mt-2 bg-light-blue" type="submit" block>Login</v-btn>
  </v-form>
</v-sheet>
</template>

<script>
  export default {
    data: () => ({
      email: '',
      emailRules: [
        value => {
          if (value) return true

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
          if (value) return true

          return 'Password is required.'
        },
        value => {
          if (value.length >= 8) return true

          return 'Min 8 characters'
        },
      ],
    }),
  }
</script>
