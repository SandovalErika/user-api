"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getUsers } from "../../services/userService";

import UserList from "../../component/users/UserList";

import {
  Container,
  ButtonContainer,
  StyledButton,
  Title,
} from "../../component/users/UsersList.styles";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  if (!users) return <div>Loading...</div>;

  return (
    <Container>
      <Title>CRUD Usuarios</Title>

      <ButtonContainer>
        <Link href="/users/create" passHref>
          <StyledButton>Crear Usuario</StyledButton>
        </Link>
        <Link href="/hobbies/create" passHref>
          <StyledButton>Crear Hobby</StyledButton>
        </Link>
      </ButtonContainer>

      <UserList users={users} />
    </Container>
  );
}
