import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import LandingPage from "../pages/LandingPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Approutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Approutes