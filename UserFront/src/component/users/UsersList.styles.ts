import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  a {
    margin: 0 10px;
    text-decoration: none;
  }
`;

export const StyledButton = styled.a`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px auto;
  max-width: 600px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const TableHeader = styled.th`
  padding: 12px;
  background-color: #b0b0b0;
  color: white;
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  border-bottom: 2px solid #ddd;
`;

export const TableCell = styled.td`
  padding: 10px 15px;
  text-align: left;
  font-size: 14px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    text-align: center;
  }
`;

export const EditLink = styled(Link)`
  text-decoration: none;
  color: #0070f3;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #e6f7ff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #bae7ff;
  }
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

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`;