<template>
  <v-card class="my-3">
    <v-row class="my-2 mx-auto">
      <v-col cols="12">
        <h3>{{ notificationText }}</h3>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  props: {
    notificationText: String,
  },
}
</script>
