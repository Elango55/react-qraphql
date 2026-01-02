const BASE_URL = "http://localhost:5000";

export const resolvers = {
  Query: {
    students: async () => {
      const res = await fetch(`${BASE_URL}/students`);
      return res.json();
    }
  },

  Mutation: {
    addStudent: async (_, data) => {
      const res = await fetch(`${BASE_URL}/addStudent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      return res.json();
    },

    editStudent: async (_, { id, ...data }) => {
      const res = await fetch(`${BASE_URL}/editStudent/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      return res.json();
    },

    deleteStudent: async (_, { id }) => {
      await fetch(`${BASE_URL}/deleteStudent/${id}`, {
        method: "DELETE"
      });
      return true;
    }
  }
};
