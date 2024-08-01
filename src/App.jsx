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
import CurrentClientScreen from "./pages/CurrentClient/currentClient";
import FinanceScreen from "./pages/finance/finacescreen";
import ProspectProfile from "./pages/ProspectProfile/ProspectProfile";
import ProspectNotes from "./pages/ProspectNotes/ProspectNotes";
import EditUser from "./pages/EditUser/EditUser";
import useAuth from "./hooks/useAuth";
import DashBoardHomeScreen from "./pages/HomeScreen/Home";
import CreateProspectScreen from "./pages/CreateProspects/CreateProspects";
import MessaginScreen from "./pages/message/message";
import { useEffect } from "react";



function App() {
  // useEffect()
  const isLoggedIn = useAuth();
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: '/',
      element:
       isLoggedIn ? (
        <>
          <div className="from-[#0250E6] h-[80vh] to-[#FFFFFF]  bg-gradient-to-b">
            <Navbar />
            <HomeScreen />
            <div className="w-full pb-[15px] pt-[50px] md:pt-0">
              <FooterMobile />
            </div>
          </div>
        </>
      ) : (
        <Login />
      ),
    },
    {
      path: "/admin",
      element: (
        <>
          <DashBoardHomeScreen />
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
      path: "/current-client",
      element: (
        <>
          <CurrentClientScreen />
        </>
      ),
    },
    {
      path: "/finace",
      element: (
        <>
          <FinanceScreen />
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
      element: (
        <>
          <div className="from-[rgb(2,80,230)] h-[80vh] to-[#FFFFFF] bg-gradient-to-b">
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
      path: "/prospect-profile/:id?",
      element: (
        <>
          <div className="from-[#0250E6] h-[80vh] to-[#FFFFFF] bg-gradient-to-b">
            <Navbar />
            <ProspectProfile />
            <div className="w-full pb-[15px] pt-[50px] md:pt-0">
              <FooterMobile />
            </div>
          </div>
        </>
      ),
    },

    {
      path: "/prospect-notes",
      element: (
        <>
          <div className="from-[#0250E6] h-[80vh] to-[#FFFFFF] bg-gradient-to-b">
            <Navbar />
            <ProspectNotes />
            <div className="w-full pb-[15px] pt-[50px] md:pt-0">
              <FooterMobile />
            </div>
          </div>
        </>
      ),
    },
    {
      path: "/messaging",
      element: (
        <>
          <MessaginScreen/>
        </>
      ),
    },

    
    {
      path: "/createprospect",
      element: (
        <>
          <div className="from-[#0250E6] h-[80vh] to-[#FFFFFF] bg-gradient-to-b">
            <Navbar />
            <CreateProspectScreen />
            <div className="w-full pb-[15px] pt-[50px] md:pt-0">
              <FooterMobile />
            </div>
          </div>
        </>
      ),
    },
    {
      path: "/newuser/:id?",
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
    {
      path: "/edituser",
      element: (
        <>
          <div className="from-[#0250E6] h-[80vh] to-[#FFFFFF] bg-gradient-to-b">
            <Navbar />
            <EditUser />
            <div className="w-full pb-[15px] pt-[50px] md:pt-0">
              <FooterMobile />
            </div>
          </div>
        </>
      ),
    },
  ]);

  return (
    <main className="overflow-y-scroll unselectable min-h-screen">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
