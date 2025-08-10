import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "../pages/LandingPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import AvailableCourses from "../pages/AvailableCourses";
import MainNavbar from "../components/MainNavbar";
import SuccessStories from "../pages/SuccessStories";
import ForgetPassword from "../pages/forgetPassword";
import MeetOurExpertsPage from "../pages/MeetOurExpertsPage";

const Approutes = () => {
    const excludeAuthPaths = ["/signup", "/signin", "/forgetPassword"];
    const currentPath = location.pathname;

    return (
        <BrowserRouter>
            {!excludeAuthPaths.includes(currentPath) && currentPath === "/" && <Navbar />}
            {currentPath !== "/" && !excludeAuthPaths.includes(currentPath) && <MainNavbar />}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/availableCourses" element={<AvailableCourses />} />
                <Route path="/successStories" element={<SuccessStories />} />
                <Route path="/forgetPassword" element={<ForgetPassword />} />
                <Route path="/meet" element={<MeetOurExpertsPage />} />
            </Routes>
            {!excludeAuthPaths.includes(currentPath) && <Footer />}
        </BrowserRouter>
    )
}

export default Approutes