import ForgetPAssword from "./components/forgetPassword/forgetPAssword";
import Login from "./components/login/login";
import NewPassword from "./components/newPassword/newPassword";
import SignUp from "./components/signup/signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  }
]);
function App() {
  return (
    <main className="2xl:container 2xl:mx-auto">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
