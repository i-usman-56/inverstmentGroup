import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <SignUp />,
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
