import { OeuvresList } from "@/src/features/oeuvres/components";
import { RouteObject } from "react-router-dom";
import Oeuvres from "../Oeuvres";

export const oeuvresRoutes:RouteObject = {
  path: "oeuvres",
  element: <Oeuvres />,
  children: [
    {
      path: "",
      element: <OeuvresList />
    }
  ],
};
