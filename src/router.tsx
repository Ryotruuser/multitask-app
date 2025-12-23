import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Calc } from "./pages/Calc";
import { Tasks } from "./pages/Tasks";
import { Cambio } from "./pages/Cambio";
import { Timer } from "./pages/Timer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Calc",
    element: <Calc />,
  },
  {
    path: "/Tasks",
    element: <Tasks />,
  },
  {
    path: "/Cambio",
    element: <Cambio />,
  },
  {
    path: "/Timer",
    element: <Timer />,
  },
]);

export { router };
