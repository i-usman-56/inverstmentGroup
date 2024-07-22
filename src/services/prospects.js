import axios from "axios";
import { BASEURl } from "../constants/baseUrl";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
const GetNewProspects = async (token) => {
  // debugger;
  try {
    const response = await axiosInstance.get(`/prospects`, {
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

export const useGetCardData = (Token) => {
  return useQuery({
    queryKey: ["prospects"],
    queryFn: () => GetNewProspects(Token),
    staleTime: Infinity,
    cacheTime: 0,
  });
};
const axiosInstance = axios.create({
  baseURL: BASEURl, // Base URL from constants
  headers: {
    "Content-Type": "application/json",
    // Other headers as needed
  },
});
const getProspects = async (token, id) => {
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
  // debugger
  const response = await axiosInstance.post(`/prospects`, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useProspects = () => {
  return useMutation({
    mutationKey: "prospects",
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
export const useGetProspects = (Token,id) => {
  debugger
  return useQuery({
    queryKey: ["prospects"],
    queryFn: () => getProspects(Token,id),
    staleTime: Infinity,
    cacheTime: 0,
  });
};
