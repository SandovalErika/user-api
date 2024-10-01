import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin: 20px auto;
  background-color: #f9f9f9; /* Fondo suave */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableHeader = styled.th`
  padding: 12px;
  background-color: #b0b0b0;
  color: white;
  text-align: left;
  font-weight: bold;
  font-size: 16px;
`;

export const NoUsersMessage = styled.p`
  text-align: center;
  font-size: 16px;
  color: #555;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin: 10px 0;
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
`;

export const EditLink = styled.a`
  text-decoration: none;
  color: #0070f3;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6f7ff;
  }
`;
