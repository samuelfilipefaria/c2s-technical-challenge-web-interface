<template>
  <v-sheet class="mx-auto my-15">
    <v-alert
      class="my-10"
      density="compact"
      title="Atention"
      type="warning"
      text="The URL must be unique and not empty!"
    ></v-alert>
    <v-form fast-fail @submit.prevent>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="urlForScraping"
              label="Webmotors URL"
              type="text"
            ></v-text-field>
            <v-btn class="mt-2 bg-light-blue" type="submit" @click="createTask()">Scrape data</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script>
  import { createWebScrapingTask } from "../lib/requestSender";

  export default {
    data: () => ({
      urlForScraping: "",
    }),
    methods: {
      async createTask() {
        createWebScrapingTask(this.urlForScraping)
        .then(_ => this.$router.push({ path: "/tasks" }))
        .catch(_ => this.$router.push({ path: "/error" }));
      },
    }
  }
</script>
