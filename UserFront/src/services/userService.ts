const API_URL = "http://localhost:8080/users";

export const getUsers = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const getUser = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

export const createUser = async (user: {
  name: string;
  hobbyIds: number[];
}) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return await response.json();
};

export const updateUser = async (
  id: number,
  user: { name: string; hobbyIds: number[] }
) => {
  const response = await fetch(`${API_URL}/${id}/hobbies`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return await response.json();
};
