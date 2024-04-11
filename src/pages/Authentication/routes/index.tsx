import { RouteObject } from "react-router-dom";
import Authentication from "../Authentication";
import { Login, Register } from "@/src/features/authentication/components";

export const authRoutes: RouteObject = {
  path: "/auth",
  element: <Authentication />,
  children: [
    {
      index: true,
      path: "login",
      element: <Login />,
    },
    {
      index: true,
      path: "register",
      element: <Register />,
    },
  ],
};
