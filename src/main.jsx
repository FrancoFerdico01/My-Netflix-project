import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Subscription from "./Routes/Subscription/Subscription.jsx";
import ErrorPage from "./Routes/ErrorPage/ErrorPage.jsx";
import TvDetails from "./Routes/TvDetails/TvDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/abbonati",
    element: <Subscription />,
  },
  {
    path: "/tvdetails/:id",
    element: <TvDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
