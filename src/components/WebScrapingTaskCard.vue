<template>
  <v-card
    width="800"
    class="my-10 mx-auto"
    :title="'Web scraping from: ' + urlForScraping"
    :subtitle="state"
    append-icon="true"
    prepend-icon="mdi-robot"
  >
    <v-row class="my-2 mx-auto">
      <v-col cols="12">
        <v-tooltip text="Copy scraped URL" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn
              max-width="200"
              class="bg-light-blue"
              @click="copyUrlForScraping(urlForScraping)"
              v-bind="props"
            >
              <v-icon icon="mdi-content-copy" size="20"/>
            </v-btn>
          </template>
        </v-tooltip>

        <v-tooltip text="Delete web scraping task" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn
              max-width="200"
              class="ml-3 bg-red-accent-3"
              @click="deleteTask()"
              v-bind="props"
              :disabled="isWebScrapingRunning"
            >
              <v-icon icon="mdi-trash-can" size="20"/>
            </v-btn>
          </template>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { deleteWebScrapingTask } from '../lib/requestSender';

export default {
  props: {
    urlForScraping: String,
    state: String,
    taskId: String,
  },
  computed: {
    isWebScrapingRunning() {
      return this.state.toLowerCase() == 'pendente' || this.state.toLowerCase() == 'em progresso';
    },
  },
  methods: {
    async deleteTask() {
      deleteWebScrapingTask(this.taskId)
      .then(_ => this.$emit("updateTasksList"))
      .catch(_ => this.$router.push({ path: "/error" }));
    },
    copyUrlForScraping(urlForScraping) {
      navigator.clipboard.writeText(urlForScraping);
    }
  },
}
</script>
