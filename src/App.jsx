import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgetPAssword from "./components/auth/forgetPassword/forgetPAssword";
import SignUp from "./components/auth/signup/signup";
import NewPassword from "./components/auth/newPassword/newPassword";
import Login from "./components/auth/login/login";
import HomeScreen from "./pages/Home/homeScreen";
import FooterMobile from "./components/auth/signup/components/footer/Footer";
import Navbar from "./components/Navbar/navbar";
import ProjectList from "./pages/ProjectList/ProjectList";
import UserAccess from "./pages/UserAccess/userAccess";
import NewUser from "./pages/NewUser/NewUser";
import NotificationScreen from "./pages/Notification/notification";
import TeamActivityScreen from "./pages/TeamActivity/teamActivity";

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
        <div className="from-[#0250E6] h-[80vh] to-[#FFFFFF]  bg-gradient-to-b">
          <Navbar />
          <HomeScreen />
          <div className="w-full pb-[15px] pt-[50px] md:pt-0">
            <FooterMobile />
          </div>
        </div>
      </>
    ),
  },
  {
    path: "/user-access",
    element: (
      <>
        <div className="from-[#0250E6] h-[80vh] to-[#FFFFFF] bg-gradient-to-b">
          <Navbar />
          <UserAccess />
          <div className="w-full pb-[15px] pt-[50px] md:pt-0">
            <FooterMobile />
          </div>
        </div>
      </>
    ),
  },
  {
    path: "/notification",
    element: (
      <>
        <NotificationScreen />
      </>
    ),
  },
  {
    path: "/team-activity",
    element: (
      <>
        <TeamActivityScreen />
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
  {
    path: "/project-list",
    // element: <ProjectList />,
    element: (
      <>
        <div className="from-[#0250E6] h-[80vh] to-[#FFFFFF] bg-gradient-to-b">
          <Navbar />
          <ProjectList />
          <div className="w-full pb-[15px] pt-[50px] md:pt-0">
            <FooterMobile />
          </div>
        </div>
      </>
    ),
  },

  {
    path: "/newuser",
    element: (
      <>
        <div className="from-[#0250E6] h-[80vh] to-[#FFFFFF] bg-gradient-to-b">
          <Navbar />
          <NewUser />
          <div className="w-full pb-[15px] pt-[50px] md:pt-0">
            <FooterMobile />
          </div>
        </div>
      </>
    ),
  },
]);

function App() {
  return (
    <main className="overflow-y-scroll min-h-screen">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
