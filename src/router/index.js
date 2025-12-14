import React, { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

// Lazy Loaded Pages
const Login = lazy(() => import("../pages/auth/login"));
const ForgotPassword = lazy(() => import("../pages/auth/forgot-password"));
const ResetPassword = lazy(() => import("../pages/auth/reset-password"));
const Dashboard = lazy(() => import("../pages/dashboard"));
const IndexPage = lazy(() => import("../pages/index"));
const Tutor = lazy(() => import("../pages/tutor"));
const Students = lazy(() => import("../pages/students"));
const Courses = lazy(() => import("../pages/courses"));
const CouponManagement = lazy(() => import("../pages/coupon-management"));
const AdminPermissions = lazy(() => import("../pages/admin-permissions"));
const Settings = lazy(() => import("../pages/settings/index"));
const Account = lazy(() => import("../pages/settings/account"));
const Notification = lazy(() => import("../pages/settings/notifications"));
const Security = lazy(() => import("../pages/settings/security"));

const router = createBrowserRouter([
  {
    path: "/auth",
    errorElement: <ErrorPage />,
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "tutors",
        element: <Tutor />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "coupon-management",
        element: <CouponManagement />,
      },
      {
        path: "admin-permissions",
        element: <AdminPermissions />,
      },
      {
        path: "settings",
        element: <Settings />,
        children: [
          {
            path: "account",
            element: <Account />,
          },
          {
            path: "notification",
            element: <Notification />,
          },
          {
            path: "security",
            element: <Security />,
          },
          {
            index: true,
            element: <Account />,
          },
        ],
      },
    ],
  },
]);

export { router };
