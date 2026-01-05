import { StudentDataSource } from "../datasources/student.datasource.js";

export const Query = {
  students: async (_, args) => {
    return StudentDataSource.getStudents(args);
  },
};
