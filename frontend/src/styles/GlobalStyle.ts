import styled from "styled-components";

/* ========== TYPES ========== */
type ButtonProps = {
  primary?: boolean;
  danger?: boolean;
};

/* ========== LAYOUT ========== */
export const Wrapper = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 24px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 20px;
`;

/* ========== INPUT ========== */
export const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #2c3e50;
  }
`;

/* ========== BUTTON ========== */
export const Button = styled.button<ButtonProps>`
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #fff;

  background: ${({ primary, danger }) =>
    danger ? "#e74c3c" : primary ? "#2c3e50" : "#7f8c8d"};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* ========== TABLE ========== */
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th,
  td {
    padding: 12px;
    border-bottom: 1px solid #eee;
    text-align: left;
  }

  th {
    background: #f8f9fa;
  }
`;

/* ========== PAGINATION ========== */
export const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
