import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AnimalDetails } from "./components/AnimalDetails/AnimalDetails";
import { Animals } from "./components/Animals/Animals";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Animals></Animals>,
        index: true,
      },
      {
        path: "/animal/:id",
        element: <AnimalDetails></AnimalDetails>,
      },
    ],
  },
]);
