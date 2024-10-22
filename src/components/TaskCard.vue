<template>
  <v-card
    class="my-3"
    :title="description"
    :subtitle="'Type: ' + taskType + ' | State: ' + state"
    :text="'URL for scraping: ' + urlForScraping"
  ></v-card>
</template>

<script>
export default {
  props: {
    description: String,
    taskType: String,
    state: String,
    urlForScraping: String
  }
}
</script>