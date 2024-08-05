import { useQuery } from "@tanstack/react-query";
import { BASEURl } from "../constants/baseUrl";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: BASEURl, // Base URL from constants
  headers: {
    "Content-Type": "application/json",
    // Other headers as needed
  },
});
export const useGetChatRooms = (Token) => {
  //   debugger
  return useQuery({
    queryKey: ["getchatRooms"], // Including id in the query key to differentiate queries
    queryFn: () => getChatRooms(Token),
    staleTime: 0, // Data is considered stale immediately
    cacheTime: 0,
  });
};
const getChatRooms = async (token) => {
  //   debugger;
  try {
    const response = await axiosInstance.get(`/chat/admin/chats`, {
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
export const useGetChatRoomsMessage = ( id) => {
    debugger
  return useQuery({
    queryKey: ["getchatRoomsMessage", id], // Including id in the query key to differentiate queries
    queryFn: () => getChatRoomsMessage(id),
    staleTime: 0, // Data is considered stale immediately
    cacheTime: 0,
  });
};
const getChatRoomsMessage = async ( id) => {
    debugger;
  try {
    const response = await axiosInstance.get(`/chat/rooms/${id}/messages`, );
    return response.data;

    // return response.data;
  } catch (error) {
    console.error("Error fetching prospects:", error);
    throw error; // Re-throw the error for the calling code to handle
  }
};
