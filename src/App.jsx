import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgetPAssword from "./components/auth/forgetPassword/forgetPAssword";
import SignUp from "./components/auth/signup/signup";
import NewPassword from "./components/auth/newPassword/newPassword";
import Login from "./components/auth/login/login";
import tableData from "./data/tableData1.json";
import tableData1 from "./data/tableData2.json";
import Table from "./components/table/table";
import Tasks from "./components/task/tasks";
import Graph from "./components/Graph/graph";
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
      <Graph/>
      {/* <Tasks/> */}
        {/* <Table tableData={tableData} /> */}
        {/* <Table tableData={tableData1} /> */}
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
    <main className="2xl:container 2xl:mx-auto">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
