import { createBrowserRouter } from "react-router-dom";
import { App } from "../App"
import { adherentRoutes } from "../pages/Adherents/routes/routes";
import { oeuvresRoutes } from "../pages/Oeuvres/routes/routes";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        adherentRoutes,
        oeuvresRoutes
      ]
    },
  ]);