import axios from "axios";
import { BASEURl } from "../constants/baseUrl";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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
    staleTime: 0, // Data is considered stale immediately
    cacheTime: 0, // Data is not cached
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
  // debugger;
  try {
    if (id) {
      const response = await axiosInstance.get(`/prospects/assigned/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } else {
      const response = await axiosInstance.get(`/prospects`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    }

    // return response.data;
  } catch (error) {
    console.error("Error fetching prospects:", error);
    throw error; // Re-throw the error for the calling code to handle
  }
};
const createProspects = async ({ values, token }) => {
  debugger
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
export const useGetProspects = (Token, id) => {
  // debugger
  return useQuery({
    queryKey: ["prospects"], // Including id in the query key to differentiate queries
    queryFn: () => getProspects(Token, id),
    staleTime: 0, // Data is considered stale immediately
    cacheTime: 0,
  });
};
const GetNewProspectsDetail = async (token, id) => {
  debugger;
  try {
    const response = await axiosInstance.get(`/prospects/${id}`, {
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

export const useGetProspectDetail = (Token, id) => {
  return useQuery({
    queryKey: ["prospectsDetail"],
    queryFn: () => GetNewProspectsDetail(Token, id),
    staleTime: 0, // Data is considered stale immediately
    cacheTime: 0, // Data is not cached
  });
};
export const useEditProspects = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: "Editprospects",
    mutationFn: editProspects,

    onSuccess: (data) => {
      queryClient.invalidateQueries(["prospects"]);
      toast.success("Prospect UpDate successfully");
      // console.log("Prospect edited successfully");
      // console.log(data);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
};
const editProspects = async ({ token, id, data }) => {
  debugger;
  try {
    const response = await axiosInstance.put(`/prospects/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error editing prospect:", error);
    throw error; // Re-throw the error for the calling code to handle
  }
};
export const useTeamProspects = (Token) => {
  // debugger
  return useQuery({
    queryKey: ["Team Prospect"], // Including id in the query key to differentiate queries
    queryFn: () => getTeamProspects(Token),
    staleTime: 0, // Data is considered stale immediately
    cacheTime: 0,
  });
};
const getTeamProspects = async (token) => {
  debugger;
  try {
    const response = await axiosInstance.get(`/prospects/list-assigned`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;

    // return response.data;
  } catch (error) {
    console.error("Error fetching prospects:", error);
    throw error; // Re-throw the error for the calling code to handle
  }
};

export const useDeleteProspects = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate()
  return useMutation({
    mutationKey: "deleteProspects",
    mutationFn: deleteProspects,

    onSuccess: (data) => {
      // console.log(data)

      queryClient.invalidateQueries(["prospects"]);
      toast.success(data.message);
      navigate("/project-list");
      // console.log("Prospect edited successfully");
      // console.log(data);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
};
const deleteProspects = async ({ token, id }) => {
  debugger;
  try {
    const response = await axiosInstance.delete(`/prospects/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error editing prospect:", error);
    throw error; // Re-throw the error for the calling code to handle
  }
};
