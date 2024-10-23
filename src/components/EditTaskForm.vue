<template>
  <v-sheet class="mx-auto my-15" width="500">
    <v-form fast-fail @submit.prevent>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="task.description"
              label="Description"
              type="text"
            ></v-text-field>

            <v-combobox
              v-model="task.taskType"
              label="Type"
              :items="['Web Scraping']"
            ></v-combobox>

            <v-combobox
              v-model="task.state"
              label="State"
              :items="['Pendente', 'Em progresso', 'Concluída', 'Falha']"
            ></v-combobox>

            <v-text-field
              v-model="task.urlForScraping"
              :rules="urlForWebScrapingRules"
              label="URL for Web Scraping"
              type="text"
            ></v-text-field>

            <v-btn class="mt-2 bg-light-blue" type="submit" @click="editTask()">Edit task</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script>
  import axios from "axios";

  export default {
    props: {
      description: String,
      taskType: String,
      state: String,
      urlForScraping: String,
      taskId: String,
    },
    data: () => ({
      task: {}
    }),
    methods: {
      async editTask() {
        try {
          const {data} = await axios.post('http://localhost:3000/tasks/edit', {
            user_id: localStorage.getItem("jwt_c2s_challenge"),
            task_id: this.task.taskId,
            description: this.task.description,
            type: this.task.taskType,
            state: this.task.state,
            url_for_scraping: this.task.urlForScraping,
          });

          this.$router.push({ path: "/" });
        } catch (error) {
          this.$router.push({ path: "/error" });
          console.error(error);
        }

      },
      loadData() {
        this.task.description = this.$props.description;
        this.task.taskType = this.$props.taskType;
        this.task.state = this.$props.state;
        this.task.urlForScraping = this.$props.urlForScraping;
        this.task.taskId = this.$props.taskId;
      }
    },
    mounted() {
      this.loadData();
    }
  }
</script>
