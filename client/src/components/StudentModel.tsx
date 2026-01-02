import styled from "styled-components";
import { useState, useEffect } from "react";
import type { Student } from "../type";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 320px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
`;

const Button = styled.button`
  padding: 8px 12px;
  margin-right: 8px;
`;

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (data: Omit<Student, "id">) => void;
  student?: Student | null;
};

export default function StudentModal({ open, onClose, onSave, student }: Props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [course, setCourse] = useState("");

  useEffect(() => {
    if (student) {
      setName(student.name);
      setAge(student.age);
      setCourse(student.course);
    }
  }, [student]);

  if (!open) return null;

  return (
    <Overlay>
      <Modal>
        <h3>{student ? "Edit Student" : "Add Student"}</h3>

        <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <Input type="number" placeholder="Age" value={age} onChange={e => setAge(+e.target.value)} />
        <Input placeholder="Course" value={course} onChange={e => setCourse(e.target.value)} />

        <Button onClick={() => onSave({ name, age, course })}>Save</Button>
        <Button onClick={onClose}>Cancel</Button>
      </Modal>
    </Overlay>
  );
}
