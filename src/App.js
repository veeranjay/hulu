import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Dashboard/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function App() {
  return (

      <RouterProvider router={router} />
  );
}
