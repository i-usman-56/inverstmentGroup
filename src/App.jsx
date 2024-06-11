import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgetPAssword from "./components/auth/forgetPassword/forgetPAssword";
import SignUp from "./components/auth/signup/signup";
import NewPassword from "./components/auth/newPassword/newPassword";
import Login from "./components/auth/login/login";
import HomeScreen from "./pages/Home/homeScreen";
import FooterMobile from "./components/auth/signup/components/footer/Footer";
import Navbar from "./components/Navbar/navbar";
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
        <div className="from-[#0250E6] h-[80vh] to-[#FFFFFF] bg-gradient-to-b">
          <Navbar />
          <HomeScreen />
          <div className="w-full mt-[78px]">
            <FooterMobile />
          </div>
        </div>
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
