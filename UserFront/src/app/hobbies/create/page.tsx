"use client";

import { useEffect, useState } from "react";

import { getHobbies } from "@/services/hobbyService";

import HobbyList from "../../../component/hobbies/HobbyList";
import HobbyForm from "../../../component/hobbies/HobbyForm";

import { Title } from "../../../component/hobbies/HobbyForm.styles";

const CreateHobbyPage: React.FC = () => {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    const fetchHobbies = async () => {
      const hobbiesData = await getHobbies();
      setHobbies(hobbiesData);
    };

    fetchHobbies();
  }, []);

  const handleSuccess = () => {
    window.location.href = "/hobbies/create";
  };

  if (!hobbies) return <div>Loading...</div>;

  return (
    <div>
      <Title>Crear Hobby</Title>
      <HobbyForm onSuccess={handleSuccess} />
      <HobbyList hobbies={hobbies} />
    </div>
  );
};

export default CreateHobbyPage;
