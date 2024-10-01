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
  width: 80%;

  label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  select[multiple] {
    height: 100px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const SubmitButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }

  &:focus {
    outline: none;
  }
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


