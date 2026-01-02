import styled from "styled-components";
import type { Student } from "../type";

const Card = styled.div`
  background: white;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  margin-left: 6px;
`;

type Props = {
  students: Student[];
  onEdit: (s: Student) => void;
  onDelete: (id: string) => void;
};

export default function StudentList({ students, onEdit, onDelete }: Props) {
  return (
    <>
      {students.map(s => (
        <Card key={s.id}>
          <div>
            <b>{s.name}</b> — {s.course} ({s.age})
          </div>
          <div>
            <Button onClick={() => onEdit(s)}>✏️</Button>
            <Button onClick={() => onDelete(s.id)}>❌</Button>
          </div>
        </Card>
      ))}
    </>
  );
}
