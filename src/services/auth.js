import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { BASEURl } from "../constants/baseUrl";
import { toast } from "react-toastify";

export const useLogin = () => {
    debugger
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
export const useSignUp = () => {
    debugger
    const navigate = useNavigate();
     return useMutation({
      mutationKey: "signUpUser",
        mutationFn: createUser,
      onSuccess: (data) => {

        // localStorage.setItem("userData", JSON.stringify(data));
        // localStorage.setItem("token", JSON.stringify(data.token));
        toast.success("signupsuccesfull");
        navigate("/login");
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    });
  };

  const loginUser = async (values) => {
    const response = await axios.post(
      `${BASEURl}/authentication/login`,
      values
    );
    return response.data;
  };

  const createUser = async (values) => {
    const response = await axios.post(
      `${BASEURl}/user/signUp`,
      values
    );
    return response.data;
  };


  export const getAllUser = async () => {
    debugger;
    try {
      const response = await axios.get(`${BASEURl}/user`);
      // console.log(response.user)
      return response.data;
    } catch (error) {
      console.error("Error fetching prospects:", error);
      throw error; // Re-throw the error for the calling code to handle
    }
  };
