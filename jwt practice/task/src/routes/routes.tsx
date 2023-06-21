import {createBrowserRouter, useRoutes} from "react-router-dom"
import Login from "../pages/Login"
import Main from "../pages/Main"

 const routes=createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/main",
        element: <Main />,
      },
])
export default routes;