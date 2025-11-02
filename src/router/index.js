import React from "react";
import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

// Lazy Loaded Pages
const Login = lazy(() => import("../pages/auth/login"));
const ForgotPassword = lazy(() => import("../pages/auth/forgot-password"));
const ResetPassword = lazy(() => import("../pages/auth/reset-password"));
const Dashboard = lazy(() => import("../pages/dashboard"));
const Tutor = lazy(() => import("../pages/tutor"));
const Students = lazy(() => import("../pages/students"));
const Courses = lazy(() => import("../pages/courses"));
const AdminPermissions = lazy(() => import("../pages/admin-permissions"));
// const WhatWeDo = lazy(() => import("../pages/what-we-do"));
// const PlansAndPricing = lazy(() => import("../pages/plans-and-pricing"));
// const Request = lazy(() => import("../pages/request"));
// const Personal = lazy(() => import("../pages/request/personal"));
// const ElderlyOne = lazy(() => import("../pages/request/elderly-one"));
// const ReviewRequest = lazy(() => import("../pages/request/review"));

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
        path: "",
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "/tutors",
        element: <Tutor />,
      },
      {
        path: "/students",
        element: <Students />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/admin-permissions",
        element: <AdminPermissions />,
      },
      // {
      //   path: "/privacy-policy",
      //   element: <PrivacyPolicy />,
      // },
    ],
  },
]);

export { router };
