import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import CreateGroup from './pages/CreateGroup';
import CreateSingle from './pages/CreateSingle';
import ViewGroup from './pages/ViewGroup';
import ViewList from './pages/ViewList';
import ViewSingle from './pages/ViewSingle';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/CreateGroup",
    element: <CreateGroup />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/CreateSingle",
    element: <CreateSingle />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ViewGroup",
    element: <ViewGroup />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ViewList",
    element: <ViewList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ViewSingle",
    element: <ViewSingle />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
