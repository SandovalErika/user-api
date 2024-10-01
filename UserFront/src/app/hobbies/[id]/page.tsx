"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import { getHobby } from "../../../services/hobbyService";

import HobbyForm from "../../../component/hobbies/HobbyForm";

import { Title } from "../../../component/hobbies/HobbyForm.styles";

const EditHobbyPage: React.FC = () => {
  const { id } = useParams();
  const [existingHobby, setExistingHobby] = useState(null);

  useEffect(() => {
    const fetchHobby = async () => {
      const hobbyData = await getHobby(Number(id));
      setExistingHobby(hobbyData);
    };

    if (id) {
      fetchHobby();
    }
  }, [id]);

  const handleSuccess = () => {
    window.location.href = "/hobbies/create";
  };

  if (!existingHobby) return <div>Loading...</div>;

  return (
    <div>
      <Title>Editar Hobby</Title>
      <HobbyForm existingHobby={existingHobby} onSuccess={handleSuccess} />
    </div>
  );
};

export default EditHobbyPage;
