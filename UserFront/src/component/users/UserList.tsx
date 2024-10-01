import {
  TableContainer,
  TableRow,
  TableHeader,
  TableCell,
  EditLink,
  NoUsersMessage,
} from "../../component/users/UsersList.styles";

interface UserListProps {
  users: any[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <TableContainer>
      <thead>
        <TableRow>
          <TableHeader>Nombre usuario</TableHeader>
          <TableHeader>Hobbies</TableHeader>
          <TableHeader>Acciones</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <TableRow>
            <TableCell colSpan={3}>
              <NoUsersMessage>No hay usuarios cargados</NoUsersMessage>
            </TableCell>
          </TableRow>
        ) : (
          users.map((user: any) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>
                {user.hobbies && user.hobbies.length > 0
                  ? user.hobbies.map((hobby: any) => hobby.name).join(", ")
                  : "Sin hobbies"}
              </TableCell>
              <TableCell>
                <EditLink href={`/users/${user.id}`}>Editar</EditLink>
              </TableCell>
            </TableRow>
          ))
        )}
      </tbody>
    </TableContainer>
  );
};

export default UserList;
