import React from "react";
import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

// Lazy Loaded Pages
const SignUp = lazy(() => import("../pages/auth/signup"));
const Login = lazy(() => import("../pages/auth/login"));
const ForgotPassword = lazy(() => import("../pages/auth/forgot-password"));
const ResetPassword = lazy(() => import("../pages/auth/reset-password"));
const MembershipPlans = lazy(() => import("../pages/auth/signup/membership-plans"));
const MultiLearnerSetup = lazy(() =>import("../pages/auth/multi-learner-setup"));
const Dashboard = lazy(() => import("../pages/dashboard"));
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
        path: "signup",
        element: <SignUp />,
      },
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
      {
        path: "signup/membership-plans",
        element: <MembershipPlans />,
      },
      {
        path: "multi-learner-setup",
        element: <MultiLearnerSetup />,
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
      // {
      //   path: "/terms-and-conditions",
      //   element: <TermsAndConditions />,
      // },
      // {
      //   path: "/privacy-policy",
      //   element: <PrivacyPolicy />,
      // },
    ],
  },
]);

export { router };
