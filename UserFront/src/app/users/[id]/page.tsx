"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import { getUser } from "../../../services/userService";

import UserForm from "../../../component/users/UserForm";

import { Title } from "../../../component/users/UserForm.styles";

const EditUserPage: React.FC = () => {
  const { id } = useParams();
  const [existingUser, setExistingUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser(Number(id));
      setExistingUser(userData);
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  const handleSuccess = () => {
    window.location.href = "/users";
  };

  if (!existingUser) return <div>Loading...</div>;

  return (
    <div>
      <Title>Edición Usuario</Title>
      <UserForm existingUser={existingUser} onSuccess={handleSuccess} />
    </div>
  );
};

export default EditUserPage;
