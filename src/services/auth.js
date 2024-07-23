import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BASEURl } from "../constants/baseUrl";
import { toast } from "react-toastify";
// Send Token For Athorization
const axiosInstance = axios.create({
  baseURL: BASEURl,
  headers: {
    "Content-Type": "application/json",
  },
});
// Log In Api
export const useLogin = () => {
  // debugger
  const navigate = useNavigate();
  return useMutation({
    mutationKey: "loginUser",
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem("userData", JSON.stringify(data));
      sessionStorage.setItem("token", JSON.stringify(data.token));
      toast.success("Login successful");
      navigate("/admin");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
};
const loginUser = async (values) => {
  const response = await axios.post(`${BASEURl}/authentication/login`, values);
  return response.data;
};
// Sign Up Api
export const useSignUp = () => {
  // debugger
  const navigate = useNavigate();
  return useMutation({
    mutationKey: "signUpUser",
    mutationFn: createUser,
    onSuccess: (data) => {
      toast.success("signupsuccesfull");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
};
const createUser = async (values) => {
  const response = await axios.post(`${BASEURl}/user/signUp`, values);
  return response.data;
};
// Get All User Api (User Access)
export const useGetAllUsers = (Token) => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => GetAllUser(Token),
    staleTime: 0,
    cacheTime: 0,
  });
};
const GetAllUser = async (token) => {
  // debugger;
  try {
    const response = await axiosInstance.get(`/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching prospects:", error);
    throw error;
  }
};
// Get All User Api (User Access)
export const useGetEditUsers = (token, id, data) => {
  // debugger
  return useQuery({
    queryKey: ["edituser", id],
    queryFn: () => GetEditUser(token, id, data),
    staleTime: 0,
    cacheTime: 0,
    enabled: !!id // Only run this query if `id` is available
  });
};
const GetEditUser = async (token, id, data) => {
  try {
    const response = await axiosInstance.put(`/user/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error fetching or updating user:", error);
    throw error;
  }
};
const updateUser = async ({ userId, formData, token }) => {
  const response = await axiosInstance.put(`/user/${userId}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};


export const useUserMutation = (userId) => {
  const token = JSON.parse(sessionStorage.getItem("token"));

  return useMutation({
    mutationFn: async (formData) => {
      if (userId) {
        return updateUser({ userId, formData, token });
      } else {
        return createUser(formData);
      }
    },
    onSuccess: (data) => {
      toast.success("User operation successful!");
      console.log("User operation successful:", data);
    },
    onError: (error) => {
      toast.error(error.response ? error.response.data.message : error.message);
      console.error("Error during user operation:", error.response ? error.response.data : error.message);
    },
  });
};