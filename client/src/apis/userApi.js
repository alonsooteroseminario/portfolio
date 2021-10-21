import api from "./serverApi";

export const loginApi = (authData) => {
  return api.post("/users/login", authData);
};

export const signUpApi = (authData) => {
  return api.post("/users/signup", authData);
};


