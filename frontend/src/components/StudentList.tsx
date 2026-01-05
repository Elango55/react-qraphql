import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_STUDENTS,
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT
} from "../graphql/queries";
import * as S from "../styles/GlobalStyle";

type Student = {
  id: string;
  name: string;
  email: string;
  course: string;
};

const LIMIT = 5;

const emptyForm = {
  name: "",
  email: "",
  course: ""
};

export default function StudentList() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  /* ---------------- QUERY ---------------- */
  const { data, loading } = useQuery(GET_STUDENTS, {
    variables: { page, limit: LIMIT, search },
    fetchPolicy: "cache-and-network"
  });

  /* ---------------- MUTATIONS ---------------- */
  const [addStudent] = useMutation(ADD_STUDENT, {
    refetchQueries: ["Students"]
  });

  const [updateStudent] = useMutation(UPDATE_STUDENT, {
    refetchQueries: ["Students"]
  });

  const [deleteStudent] = useMutation(DELETE_STUDENT, {
    refetchQueries: ["Students"]
  });

  /* ---------------- HANDLERS ---------------- */
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.course) return;

    if (editingId) {
      updateStudent({
        variables: {
          id: editingId,
          input: form
        }
      });
    } else {
      addStudent({
        variables: {
          input: form
        }
      });
    }

    setForm(emptyForm);
    setEditingId(null);
  };

  const handleEdit = (student: Student) => {
    setEditingId(student.id);
    setForm({
      name: student.name,
      email: student.email,
      course: student.course
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this student?")) {
      deleteStudent({ variables: { id } });
    }
  };

  /* ---------------- DATA ---------------- */
  const students: Student[] = data?.students?.data ?? [];
  const totalCount = data?.students?.totalCount ?? 0;
  const totalPages = Math.ceil(totalCount / LIMIT);

  if (loading) return <p>Loading...</p>;

  return (
    <S.Wrapper>
      <h2>Student Management</h2>

      {/* SEARCH */}
      <S.Header>
        <S.Input
          placeholder="Search students..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </S.Header>

      {/* FORM */}
      <S.Form>
        <S.Input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <S.Input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <S.Input
          placeholder="Course"
          value={form.course}
          onChange={(e) => setForm({ ...form, course: e.target.value })}
        />

        <S.Button primary onClick={handleSubmit}>
          {editingId ? "Update Student" : "Add Student"}
        </S.Button>
      </S.Form>

      {/* TABLE */}
      <S.Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 && (
            <tr>
              <td colSpan={4} align="center">
                No students found
              </td>
            </tr>
          )}

          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>
                <S.Button onClick={() => handleEdit(student)}>Edit</S.Button>
                <S.Button danger onClick={() => handleDelete(student.id)}>
                  Delete
                </S.Button>
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>

      {/* PAGINATION */}
      <S.Pagination>
        <S.Button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </S.Button>

        <span>
          Page {page} of {totalPages}
        </span>

        <S.Button
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </S.Button>
      </S.Pagination>
    </S.Wrapper>
  );
}
