<template>
  <v-container>
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
