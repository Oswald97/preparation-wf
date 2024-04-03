import { RouteObject } from "react-router-dom";
import Adherents from "../Adherents";
import { AdherentDetails, AdherentList } from "@/src/features/adherents/components";

export const adherentRoutes:RouteObject = {
  path: "adherents",
  element: <Adherents />,
  children: [
    {
      path: "",
      element: <AdherentList />
    },
    {
      path: ":id",
      element: <AdherentDetails />,
    }
  ],
};
