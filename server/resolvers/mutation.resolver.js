import { StudentDataSource } from "../datasources/student.datasource.js";

export const Mutation = {
  addStudent: async (_, args) => {
    return StudentDataSource.addStudent(args);
  },

  deleteStudent: async (_, { id }) => {
    return StudentDataSource.deleteStudent(id);
  },

  updateStudent: async (_, { id, name, email, course }) => {
    return StudentDataSource.updateStudent(id, {
      name,
      email,
      course
    });
  }
};
