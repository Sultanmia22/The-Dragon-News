import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayouts from "../Layouts/AuthLayouts";
import NewsDetails from "../Pages/NewsDetails";
import PrivetRoutes from "../Provider/PrivetRoutes";
import LoadingPage from "../Components/LoadingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts/>,
    children:[

      {index : true, element:<Home/>},

      {
        path: '/category/:id',
        element: <CategoryNews/>,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <LoadingPage/>
      },
      
    ]
  },

  {
    path: '/auth',
    element: <AuthLayouts/>,
    children: [
      {
        path: '/auth/login',
        element: <Login/>
      },

       {
        path: '/auth/register',
        element: <Register/>
      }
    ]
  },

  {
    path : '/news-details/:id',
    element: <PrivetRoutes>
      <NewsDetails/>,
    </PrivetRoutes>,
    loader: () => fetch('/news.json'),
    HydrateFallback: <LoadingPage/>
  }
]);
export default router