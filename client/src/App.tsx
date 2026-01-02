import { useQuery, useMutation } from "@apollo/client";
import {
  GET_STUDENTS,
  ADD_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT
} from "./graphql";
import type { Student } from "./type";
import { GlobalStyles } from "./styles/GlobalStyles";
import StudentList from "./components/StudentList";
import StudentModal from "./components/StudentModel";
import { useState } from "react";

export default function App() {
  console.log("✅ App rendered");

  const { data, loading, error, refetch } = useQuery<{
    students: Student[];
  }>(GET_STUDENTS);

  const [addStudent] = useMutation(ADD_STUDENT);
  const [updateStudent] = useMutation(UPDATE_STUDENT);
  const [deleteStudent] = useMutation(DELETE_STUDENT);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Student | null>(null);

  if (loading) return <h1>Loading UI...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <>
      <GlobalStyles />

      <div style={{ padding: 20 }}>
        <h2>🎓 Student Management</h2>

        <button onClick={() => setOpen(true)}>➕ Add Student</button>

        <StudentList
          students={data?.students || []}
          onEdit={(s) => {
            setSelected(s);
            setOpen(true);
          }}
          onDelete={async (id) => {
            await deleteStudent({ variables: { id } });
            refetch();
          }}
        />

        <StudentModal
          open={open}
          student={selected}
          onClose={() => {
            setOpen(false);
            setSelected(null);
          }}
          onSave={async (student) => {
            if (selected) {
              await updateStudent({
                variables: { id: selected.id, ...student },
              });
            } else {
              await addStudent({ variables: student });
            }
            setOpen(false);
            setSelected(null);
            refetch();
          }}
        />
      </div>
    </>
  );
}
