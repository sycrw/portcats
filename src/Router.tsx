import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Port from "./pages/Port";
import Home from "./pages/Home";

export const Router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/:portNum" element={<Port />} />,
    <Route path="/" element={<Home />} />,
  ])
);
