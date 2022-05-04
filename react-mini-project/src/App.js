import { Routes, Route } from "react-router-dom";
import { Login, Dashboard } from "./pages";

export const App = () => (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
);