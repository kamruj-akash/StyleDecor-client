import { Outlet } from "react-router";
import Footer from "../Components/common/Footer";
import Navbar from "../Components/common/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-[#faf9fb]">

      {/* navbar */}
      <Navbar />

      {/* layouts */}
      <Outlet />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
