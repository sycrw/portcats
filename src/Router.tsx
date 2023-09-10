import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/Home";
import Port from "./pages/Port";

export const Router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/:portNum" element={<Port />} />,
    <Route path="/" element={<Home />} />,
  ])
);
