import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ErrorPage from './pages/ErrorPage'
const router = createBrowserRouter([
  {
      path: "/",
      element: <Homepage />,
      errorElement: <ErrorPage />,
  },
  {
      path: "/SignUp",
      element: <SignUp />,
      errorElement : <ErrorPage/>,
  },
  {
      path: "/login",
      element: <Login />,
      errorElement : <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
