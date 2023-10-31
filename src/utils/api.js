import axios from "axios";

const apiServer = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
export const CreateUser = (userName) => {
  return apiServer.post("/user/register", { userName });
};
export const loginUser = (userName) => {
  return apiServer.post("/user/login", { userName });
};

export const getUsers = () => {
  return apiServer.get("/users");
};

export const updateUserSize = (id, size) => {
  return apiServer.put(`/user/${id}`, { size });
};
