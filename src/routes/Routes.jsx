import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Tasks from "../components/Tasks/Tasks";
import AuthPage from "../components/AuthPage";
import Subjects from "../components/Subjects/Subjects";
import FocusTimer from "../components/FocusTimer/FocusTimer";
import Classess from "../components/Classess/Classess";

export const router = (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Tasks />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="focus-timer" element={<FocusTimer />} />
        <Route path="classess" element={<Classess />} />
        <Route path="*" element={<div>Oops! Page not found.</div>} />
      </Route>
    </Routes>
  </Router>
);
