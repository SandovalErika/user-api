import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const InputContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  width: 300px;

  label {
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 14px;
  }

  input {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;

    &:focus {
      border-color: #0070f3;
      outline: none;
      box-shadow: 0 0 5px rgba(0, 112, 243, 0.5);
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 10px;

  &:hover {
    background-color: #005bb5;
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; /* Espacio entre los botones */
  margin-top: 20px;
`;


export const BackButton = styled.button`
  background-color: #eaeaea;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cccccc;
  }

  &:focus {
    outline: none;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;
