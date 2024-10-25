import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const MainLayouts = () => {
    const location = useLocation();

    const noNavFooterPaths = ["/admin/login"];

    return (
        <div>
            {!noNavFooterPaths.includes(location.pathname) && <Navbar />}
            
            <Outlet />
            
            {!noNavFooterPaths.includes(location.pathname) && <Footer />}
        </div>
    );
};

export default MainLayouts;
