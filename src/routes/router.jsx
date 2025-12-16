import Layout from "@/layouts/Layout";
import About from "@/pages/aboutus/About";
import AllServices from "@/pages/allservices/AllServices";
import ServiceDetails from "@/pages/servicedetails/ServiceDetails";
import Pricing from "@/pages/pricing/Pricing";
import Contact from "@/pages/contact/Contact";
import GetStarted from "@/pages/getstarted/GetStarted";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <AllServices /> },
      { path: "/services/:slug", element: <ServiceDetails /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/contact", element: <Contact /> },
      { path: "/get-started", element: <GetStarted /> }
    ]
  },
]);
