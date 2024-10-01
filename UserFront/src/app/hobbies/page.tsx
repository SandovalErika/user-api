"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getHobbies } from "../../services/hobbyService";

import HobbyList from "../../component/hobbies/HobbyList";

import { Title } from "../../component/users/UsersList.styles";

const HobbiesPage: React.FC = () => {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    const fetchHobbies = async () => {
      const hobbiesData = await getHobbies();
      setHobbies(hobbiesData);
    };

    fetchHobbies();
  }, []);

  if (!hobbies) return <div>Loading...</div>;

  return (
    <div>
      <Title>Create Hobby</Title>
      <HobbyList hobbies={hobbies} />
      <Link href="/users/create">Create User</Link>
    </div>
  );
};

export default HobbiesPage;
