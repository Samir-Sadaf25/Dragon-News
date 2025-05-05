import {
  createBrowserRouter,
} from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Registar from "../Components/Registar";
import Login from "../Components/Login";


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        hydrateFallbackElement: <span className="loading loading-dots loading-xl"></span>,
        loader: () => fetch('/news.json')
      },

    ]

  },
  {
    path: "/auth",
    Component:AuthLayout,
    children: [
      {
        path:"/auth/login",
        Component:Login
      },
      {
        path:"/auth/registar",
        Component:Registar
      }
      
    ]
  }
]);

export default router
