<template>
  <v-card
    width="800"
    class="my-3 mx-auto"
    :title="'#' + taskId + ' ' + description"
    :subtitle="state"
    append-icon="true"
    prepend-icon="mdi-account"
  >
    <v-row class="my-2 mx-auto">
      <v-col cols="12">
        <v-tooltip text="Edit user task" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn
              max-width="200"
              class="bg-light-blue"
              @click="goToTaskEditionPage()"
              v-bind="props"
            >
              <v-icon icon="mdi-pencil" size="20"/>
            </v-btn>
          </template>
        </v-tooltip>

        <v-tooltip text="Delete user task" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn
              max-width="200"
              class="ml-3 bg-red-accent-3"
              @click="deleteTask()"
              v-bind="props"
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
import { deleteUserTask } from '../lib/requestSender';

export default {
  props: {
    description: String,
    state: String,
    taskId: String,
  },
  methods: {
    async deleteTask() {
      deleteUserTask(this.taskId)
      .then(_ => this.$emit("updateTasksList"))
      .catch(_ => this.$router.push({ path: "/error" }));
    },
    goToTaskEditionPage() {
      this.$router.push({ path: `/user-task-edition/${this.taskId}` })
    },
    reloadPage() {
      location.reload();
    },
  },
}
</script>
