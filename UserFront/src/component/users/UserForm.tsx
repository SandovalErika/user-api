"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { createUser, updateUser } from "../../services/userService";
import { getHobbies } from "../../services/hobbyService";

import {
  FormContainer,
  InputContainer,
  SubmitButton,
  ButtonGroup,
  BackButton,
} from "./UserForm.styles";

interface UserFormProps {
  existingUser?: {
    id: number;
    name: string;
    email: string;
    hobbyIds: number[];
  };
  onSuccess: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ existingUser, onSuccess }) => {
  const [name, setName] = useState(existingUser?.name || "");
  const [hobbyIds, setHobbyIds] = useState<number[]>(
    existingUser?.hobbyIds || []
  );
  const [availableHobbies, setAvailableHobbies] = useState<
    { id: number; name: string }[]
  >([]);

  useEffect(() => {
    async function fetchHobbies() {
      const hobbies = await getHobbies();
      setAvailableHobbies(hobbies);
    }
    fetchHobbies();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (existingUser) {
      await updateUser(existingUser.id, { name, hobbyIds });
    } else {
      await createUser({ name, hobbyIds });
    }
    onSuccess();
  };

  const handleHobbyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIds = Array.from(e.target.selectedOptions, (option) =>
      Number(option.value)
    );
    setHobbyIds(selectedIds);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </InputContainer>

      <InputContainer>
        <label htmlFor="hobbies">Hobbies:</label>
        <select
          id="hobbies"
          multiple
          value={hobbyIds.map(String)}
          onChange={handleHobbyChange}
        >
          {availableHobbies.map((hobby) => (
            <option key={hobby.id} value={hobby.id}>
              {hobby.name}
            </option>
          ))}
        </select>
      </InputContainer>

      <ButtonGroup>
        <Link href="/users">
          <BackButton>Atras</BackButton>
        </Link>
        <SubmitButton type="submit">
          {existingUser ? "Guardar" : "Crear"}
        </SubmitButton>
      </ButtonGroup>
    </FormContainer>
  );
};

export default UserForm;
