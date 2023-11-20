import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet> {/* this is our parent  */}
        </div>
    );
};

export default Main;