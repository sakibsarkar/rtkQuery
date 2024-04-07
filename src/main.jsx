import { ApiProvider } from "@reduxjs/toolkit/query/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AddProduct from "./components/AddProduct/AddProduct.jsx";
import "./index.css";
import MainLayout from "./laytout.jsx";
import { apiSlice } from "./redux/features/api/apiSlice.js";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/add",
        element: <AddProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <RouterProvider router={routes} />
    </ApiProvider>
  </React.StrictMode>
);
