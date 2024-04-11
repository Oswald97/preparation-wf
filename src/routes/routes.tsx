import { createBrowserRouter } from "react-router-dom";
import { App } from "../App"
import { adherentRoutes } from "../pages/Adherents/routes/routes";
import { authRoutes } from "../pages/Authentication/routes";
import { oeuvresRoutes } from "../pages/Oeuvres/routes/routes";
import { checkAuth, logoutAction } from "../utils/_helpers";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      loader:checkAuth,
      children: [
        adherentRoutes,
        oeuvresRoutes
      ]
    },
    authRoutes,
    {
      path:"/logout",
      action: logoutAction
    }
  ]);