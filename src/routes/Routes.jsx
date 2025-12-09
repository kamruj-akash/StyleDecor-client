import { createBrowserRouter } from "react-router";
import Admin from "../Admin/Pages/Dashboard/Admin";
import Decorators from "../Admin/Pages/Decorators/Decorators";
import ServicesList from "../Admin/Pages/Services/ServicesList";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About/About";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import NotFound from "../pages/Error/NotFound";
import Home from "../pages/Home/Home";
import ServiceCoverage from "../pages/ServiceCoverage/ServiceCoverage";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";
import MyBookings from "../User/MyBooking/MyBookings";
import BookingConfirmed from "../User/PaymentBack/BookingConfirmed";
import PaymentFailed from "../User/PaymentBack/PaymentFailed";
import PaymentHistory from "../User/PaymentHistory/PaymentHistory";
import UserDashboard from "../User/User/UserDashboard";
import PrivateRoute from "./PrivateRoute";
import RoleBasedRoute from "./RoleBasedRoute";

export const router = createBrowserRouter([
  // PUBLIC ROUTES
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "service/:id", Component: ServiceDetails },
      { path: "about", Component: About },
      { path: "coverage", Component: ServiceCoverage },
    ],
  },

  // AUTH ROUTES
  { path: "/sign-up", Component: Signup },
  { path: "/login", Component: Login },
  { path: "*", Component: NotFound },

  // DASHBOARD (Protected)
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),

    children: [
      /** ----------------------
       *   ADMIN DASHBOARD
       * ---------------------- */
      {
        path: "admin",
        element: (
          <RoleBasedRoute allowedRoles={"admin"}>
            <Admin />
          </RoleBasedRoute>
        ),
      },

      {
        path: "decorators",
        element: (
          <RoleBasedRoute allowedRoles={"admin"}>
            <Decorators />
          </RoleBasedRoute>
        ),
      },
      {
        path: "services",
        element: (
          <RoleBasedRoute allowedRoles={"admin"}>
            <ServicesList />
          </RoleBasedRoute>
        ),
      },

      /** ----------------------
       *   USER DASHBOARD
       * ---------------------- */
      {
        path: "user",
        element: (
          <RoleBasedRoute allowedRoles={"user"}>
            <UserDashboard />
          </RoleBasedRoute>
        ),
      },
      {
        path: "user/bookings",
        element: (
          <RoleBasedRoute allowedRoles={"user"}>
            <MyBookings />
          </RoleBasedRoute>
        ),
      },
      {
        path: "user/payments",
        element: (
          <RoleBasedRoute allowedRoles={"user"}>
            <PaymentHistory />
          </RoleBasedRoute>
        ),
      },
      {
        path: "/dashboard/booking-confirmed",
        element: (
          <RoleBasedRoute allowedRoles={"user"}>
            <BookingConfirmed />
          </RoleBasedRoute>
        ),
      },
      {
        path: "/dashboard/payment-canceled",
        element: (
          <RoleBasedRoute allowedRoles={"user"}>
            <PaymentFailed />
          </RoleBasedRoute>
        ),
      },

      /** ----------------------
       *   DECORATOR DASHBOARD
       * ---------------------- */
      {
        path: "decorator",
        element: (
          <RoleBasedRoute allowedRoles={"admin"}>
            <div>Decorator Dashboard Coming...</div>
          </RoleBasedRoute>
        ),
      },
    ],
  },
]);

{
  /* <RoleBasedRoute allowedRoles="user">
        <DashboardLayout />
      </RoleBasedRoute> */
}
