import Login from "./components/login/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
