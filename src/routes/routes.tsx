import AdminLayout from "@/components/layouts/AdminLayout";
import Mainlayout from "@/components/layouts/Mainlayout";
import About from "@/pages/About";
import AddService from "@/pages/admin/AddService";
import Dashborad from "@/pages/admin/Dashborad";
import ServiceList from "@/pages/admin/ServiceList";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashborad />,
      },
      {
        path: "service-list",
        element: <ServiceList />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
    ],
  },
]);

export default router;
