import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgetPAssword from "./components/auth/forgetPassword/forgetPAssword";
import SignUp from "./components/auth/signup/signup";
import NewPassword from "./components/auth/newPassword/newPassword";
import Login from "./components/auth/login/login";
import HomeScreen from "./pages/Home/homeScreen";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <>
        <HomeScreen />
      </>
    ),
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forget-password",
    element: <ForgetPAssword />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
]);
function App() {
  return (
    <main className="">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
