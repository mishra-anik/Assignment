import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Patient from "../pages/Patient";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/patient" element={<Patient />} />
        </Routes>
    );
};

export default AppRoutes;
