import axios from "axios";
import { BASEURl } from "../constants/baseUrl";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
const token = JSON.parse(localStorage.getItem("token")); // Assuming token is stored in localStorage

const axiosInstance = axios.create({
  baseURL: BASEURl, // Base URL from constants
  headers: {
    "Content-Type": "application/json",
    // Other headers as needed
  },
});
export const getProspects = async (token, id) => {
  debugger;
  try {
    const response = await axiosInstance.get(`/prospects/assigned/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching prospects:", error);
    throw error; // Re-throw the error for the calling code to handle
  }
};
const createProspects = async ({ values, token }) => {
  const response = await axiosInstance.post(`/prospects`, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useProspects = () => {
  return useMutation({
    mutationKey: "Prospect",
    mutationFn: createProspects,
    onSuccess: (data) => {
 
      toast.success("Created SuccessFully ");
      console.log(data);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
};
