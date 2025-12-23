import Layout from "@/layouts/Layout";
import About from "@/pages/aboutus/About";
import AllServices from "@/pages/allservices/AllServices";
import ServiceDetails from "@/pages/servicedetails/ServiceDetails";
import Pricing from "@/pages/pricing/Pricing";
import Contact from "@/pages/contact/Contact";
import GetStarted from "@/pages/getstarted/GetStarted";
import TermsAndConditions from "@/pages/legal/TermsAndConditions";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import NotFound from "@/pages/notfound/NotFound";
import MyBookings from "@/pages/bookings/MyBookings";
import Profile from "@/pages/profile/Profile";
import Home from "@/pages/home/Home";
// Auth Pages
import SignIn from "@/pages/auth/SignIn";
import SignUp from "@/pages/auth/SignUp";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import VerifyOTP from "@/pages/auth/VerifyOTP";
import ResetPassword from "@/pages/auth/ResetPassword";
import VerifyEmail from "@/pages/auth/VerifyEmail";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  // Auth Routes (without Layout)
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/verify-otp", element: <VerifyOTP /> },
  { path: "/verify-email", element: <VerifyEmail /> },
  { path: "/reset-password", element: <ResetPassword /> },

  // Main Routes (with Layout)
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <AllServices /> },
      { path: "/services/:id", element: <ServiceDetails /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/contact", element: <Contact /> },
      { path: "/get-started", element: <GetStarted /> },
      { path: "/terms-and-conditions", element: <TermsAndConditions /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/my-bookings", element: <MyBookings /> },
      { path: "/profile", element: <Profile /> },
      { path: "*", element: <NotFound /> }
    ]
  },
]);
