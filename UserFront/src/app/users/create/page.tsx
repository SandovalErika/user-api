"use client"

import UserForm from '../../../component/users/UserForm';
import { PageContainer, Title } from '../../../component/users/UserForm.styles';

const CreateUserPage: React.FC = () => {
  const handleSuccess = () => {
    window.location.href = '/users';
  };

  return (
    <PageContainer>
      <Title>Crear Usuario</Title>
      <UserForm onSuccess={handleSuccess} />
    </PageContainer>
  );
};

export default CreateUserPage;
