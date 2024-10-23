<template>
  <v-sheet class="mx-auto my-15">
    <v-form fast-fail @submit.prevent>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="description"
              label="Description"
              type="text"
            ></v-text-field>

            <v-combobox
              v-model="taskType"
              label="Type"
              :items="['Web Scraping']"
            ></v-combobox>

            <v-text-field
              v-model="urlForScraping"
              :rules="urlForWebScrapingRules"
              label="URL for Web Scraping"
              type="text"
            ></v-text-field>

            <v-btn class="mt-2 bg-light-blue" type="submit" @click="createTask()">Create new task</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script>
  import axios from "axios";

  export default {
    data: () => ({
      description: "",
      taskType: "",
      urlForScraping: "",
    }),
    methods: {
      async createTask() {
        try {
          const {data} = await axios.post('http://localhost:3000/tasks/create', {
            description: this.description,
            user_id: localStorage.getItem("jwt_c2s_challenge"),
            state: "pendente",
            task_type: this.taskType,
            url_for_scraping: this.urlForScraping,
          });

          this.$router.push({ path: "/" });
        } catch (error) {
          this.$router.push({ path: "/error" });
          console.error(error);
        }
      }
    }
  }
</script>
