import { createHashRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Tasks from "../components/Tasks/Tasks";
import AuthPage from "../components/AuthPage";
import Subjects from "../components/Subjects/Subjects";
import FocusTimer from "../components/FocusTimer/FocusTimer";
import Classess from "../components/Classess/Classess";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Oops! Something went wrong. Page not found.</div>, // Add error element
    children: [
      { index: true, element: <Tasks /> },
      { path: "auth", element: <AuthPage /> },
      { path: "tasks", element: <Tasks /> },
      { path: "subjects", element: <Subjects /> },
      { path: "focus-timer", element: <FocusTimer /> },
      { path: "classess", element: <Classess /> },
    ],
  },
]);
