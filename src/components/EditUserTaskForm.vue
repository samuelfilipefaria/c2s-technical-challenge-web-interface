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
              v-model="task.state"
              label="State"
              :items="['pending', 'in progress', 'completed', 'failed']"
            ></v-combobox>

            <v-btn class="mt-2 bg-light-blue" type="submit" @click="editTask()">Edit task</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script>
  import { updateUserTask } from '../lib/requestSender';

  export default {
    props: {
      taskId: String,
      description: String,
      state: String,
    },
    data: () => ({
      task: {}
    }),
    methods: {
      async editTask() {
        updateUserTask(this.task.taskId, this.task.description, this.task.state)
        .then(_ => this.$router.push({ path: "/tasks" }))
        .catch(_ => this.$router.push({ path: "/error" }));
      },
      loadData() {
        this.task.taskId = this.$props.taskId;
        this.task.description = this.$props.description;
        this.task.state = this.$props.state;
      }
    },
    mounted() {
      this.loadData();
    }
  }
</script>
