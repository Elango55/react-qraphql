import axios from "axios";

const MOCK_API = "http://localhost:5000/projects";

export const projectResolver = {
  Query: {
    projects: async () => {
      const res = await axios.get(MOCK_API);
      return res.data;
    }
  },

  Mutation: {
    addProject: async (_, { name }) => {
      const res = await axios.post(MOCK_API, {
        name,
        tasks: []
      });
      return res.data;
    },

    addTask: async (_, { projectId, title }) => {
      const project = await axios.get(`${MOCK_API}/${projectId}`);

      const task = {
        id: Date.now().toString(),
        title,
        status: "TODO"
      };

      project.data.tasks.push(task);
      await axios.put(`${MOCK_API}/${projectId}`, project.data);

      return task;
    }
  }
};
