import { BrowserRouter, Route, Routes, useLocation } from "react-router";
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

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <RouteHandler />
        </BrowserRouter>
    )
}

const RouteHandler = () => {
    const excludeAuthPaths = ["/signup", "/signin", "/forgetPassword"];
    const { pathname } = useLocation();

    return (
        <>
            {!excludeAuthPaths.includes(pathname) && pathname === "/" && <Navbar />}
            {pathname !== "/" && !excludeAuthPaths.includes(pathname) && <MainNavbar />}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/availableCourses" element={<AvailableCourses />} />
                <Route path="/successStories" element={<SuccessStories />} />
                <Route path="/forgetPassword" element={<ForgetPassword />} />
                <Route path="/meet" element={<MeetOurExpertsPage />} />
            </Routes>
            {!excludeAuthPaths.includes(pathname) && <Footer />}
        </>
    )
}

export default AppRoutes;