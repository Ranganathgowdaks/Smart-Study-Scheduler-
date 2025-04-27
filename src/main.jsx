import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { Provider } from "react-redux";
import smartStore from "./store/index.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={smartStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
