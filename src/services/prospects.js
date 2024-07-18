import axios from "axios";
import { BASEURl } from "../constants/baseUrl";
const token = JSON.parse(localStorage.getItem("token")); // Assuming token is stored in localStorage

const axiosInstance = axios.create({
  baseURL: BASEURl, // Base URL from constants
  headers: {
    'Content-Type': 'application/json'
    // Other headers as needed
  }
});
export const getProspects = async (token,id) => {
    debugger
    try {
        const response = await axiosInstance.get(`/prospects/assigned/${id}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          return response.data;
    } catch (error) {
      console.error("Error fetching prospects:", error);
      throw error; // Re-throw the error for the calling code to handle
    }
  };
//   export  const getProspects = async (token) => {

//   };