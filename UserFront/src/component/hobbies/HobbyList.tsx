"use client";

import React from "react";

import {
  TableContainer,
  TableRow,
  TableHeader,
  TableCell,
  EditLink,
  NoUsersMessage,
} from "./HobbyList.styles";

interface HobbyListProps {
  hobbies: any[];
}

const HobbyList: React.FC<HobbyListProps> = ({ hobbies }) => {
  return (
    <TableContainer>
      <thead>
        <TableRow>
          <TableHeader>Nombre Hobby</TableHeader>
          <TableHeader>Acciones</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {hobbies.length === 0 ? (
          <TableRow>
            <TableCell colSpan={2}>
              <NoUsersMessage>No hay hobbies cargados</NoUsersMessage>
            </TableCell>
          </TableRow>
        ) : (
          hobbies.map((hobby) => (
            <TableRow key={hobby.id}>
              <TableCell>{hobby.name}</TableCell>
              <TableCell>
                <EditLink href={`/hobbies/${hobby.id}`}>Editar</EditLink>
              </TableCell>
            </TableRow>
          ))
        )}
      </tbody>
    </TableContainer>
  );
};

export default HobbyList;
