import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { Provider } from "react-redux";
import dataStore from "./store/storage.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home.jsx";
import Bag from "./routes/bag.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/Bag", element: <Bag /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={dataStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
