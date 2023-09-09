import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/home";
import Port from "./pages/port";

export const Router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/:portNum" element={<Port />} />,
    <Route path="/" element={<Home />} />,
  ])
);
