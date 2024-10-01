"use client";

import { useState } from "react";
import Link from "next/link";

import { createHobby, updateHobby } from "../../services/hobbyService";

import {
  FormContainer,
  InputContainer,
  SubmitButton,
  ButtonGroup,
  BackButton,
} from "./HobbyForm.styles";

interface HobbyFormProps {
  existingHobby?: { id: number; name: string };
  onSuccess: () => void;
}

const HobbyForm: React.FC<HobbyFormProps> = ({ existingHobby, onSuccess }) => {
  const [name, setName] = useState(existingHobby?.name ?? "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (existingHobby) {
      await updateHobby(existingHobby.id, { name });
    } else {
      await createHobby({ name: name });
    }
    onSuccess();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <label htmlFor="hobbyName">Nombre hobby:</label>
        <input
          type="text"
          id="hobbyName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </InputContainer>
      <ButtonGroup>
        <Link href="/users">
          <BackButton>Atras</BackButton>
        </Link>
        <SubmitButton type="submit">
          {existingHobby ? "Guardar" : "Crear"}
        </SubmitButton>
      </ButtonGroup>
    </FormContainer>
  );
};

export default HobbyForm;
