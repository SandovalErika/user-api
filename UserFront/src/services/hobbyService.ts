const API_URL = "http://localhost:8080/hobbies";

export const getHobbies = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const createHobby = async (hobby: { name: string }) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hobby),
  });
  return await response.json();
};

export const getHobby = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const updateHobby = async (id: number, hobby: { name: string }) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hobby),
  });
  return await response.json();
};
