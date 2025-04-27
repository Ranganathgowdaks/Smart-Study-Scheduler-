import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Tasks from "../components/Tasks/Tasks";
import AuthPage from "../components/AuthPage";
import Subjects from "../components/Subjects/Subjects";
import FocusTimer from "../components/FocusTimer/FocusTimer";
import Classess from "../components/Classess/Classess";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Tasks /> },
      { path: "auth", element: <AuthPage /> },
      { path: "tasks", element: <Tasks /> },
      { path: "subjects", element: <Subjects /> },
      { path: "focus-timer", element: <FocusTimer /> },
      { path: "classess", element: <Classess /> },
      // { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
