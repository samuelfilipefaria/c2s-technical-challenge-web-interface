<script setup>
import EditUserTaskForm from "@/components/EditUserTaskForm.vue";
</script>

<template>
  <v-container class="text-center mt-5">
    <v-row>
      <v-col cols="12">
        <h1>Edit task</h1>
      </v-col>

      <v-col cols="12">
        <EditUserTaskForm
          v-if="!isLoading"
          :task-id="task.id"
          :description="task.description"
          :state="task.state"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { getAUserTask } from '../lib/requestSender';

  export default {
    data: () => ({
      isLoading: true,
      task: {},
    }),
    methods: {
      async getTaskData() {
        try {
          this.task = await getAUserTask(this.$route.params.userTaskId);
          this.isLoading = false;
        } catch (error) {
          this.$router.push({ path: "/error" });
          console.error(error);
        }
      }
    },
    mounted() {
      this.getTaskData();
    }
  }
</script>
