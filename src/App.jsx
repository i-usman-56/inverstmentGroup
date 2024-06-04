import Login from "./component/login";
import LandingPage from "./pages/landingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/landingPage",
    element: <LandingPage />,
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
