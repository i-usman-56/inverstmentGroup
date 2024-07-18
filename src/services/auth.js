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
