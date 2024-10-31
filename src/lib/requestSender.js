import axios from "axios";

export async function createUserTask(userTaskDescription) {
  await axios.post('http://localhost:3000/user_tasks/create', {
    token: localStorage.getItem("jwt_c2s_challenge"),
    description: userTaskDescription,
    state: "pending",
  });
}

export async function getAUserTask(userTaskId) {
  const response = await axios.get('http://localhost:3000/user_tasks/get_a_task', {
    params: {
      token: localStorage.getItem("jwt_c2s_challenge"),
      user_task_id: userTaskId,
    }
  });

  return response.data.task;
}

export async function updateUserTask(userTaskId, userTaskDescription, userTaskState) {
  await axios.put('http://localhost:3000/user_tasks/update', {
    token: localStorage.getItem("jwt_c2s_challenge"),
    user_task_id: userTaskId,
    description: userTaskDescription,
    state: userTaskState,
  });
}

export async function deleteUserTask(userTaskId) {
  await axios.delete('http://localhost:3000/user_tasks/delete', {
    params: {
      token: localStorage.getItem("jwt_c2s_challenge"),
      user_task_id: userTaskId,
    }
  });
}

export async function createWebScrapingTask(urlForScraping) {
  await axios.post('http://localhost:3000/web_scraping_tasks/create', {
    token: localStorage.getItem("jwt_c2s_challenge"),
    url_for_scraping: urlForScraping,
    state: "pending",
  });
}

export async function deleteWebScrapingTask(webScrapingTaskId) {
  await axios.delete('http://localhost:3000/web_scraping_tasks/delete', {
    params: {
      token: localStorage.getItem("jwt_c2s_challenge"),
      web_scraping_task_id: webScrapingTaskId,
    }
  });
}
