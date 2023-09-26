import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Speakers from "../pages/Speakers";
import Schedule from "../pages/Schedule";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import GetInvolved from "../pages/GetInvolved";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="speakers" element={<Speakers />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="getInvolved" element={<GetInvolved />} />
      <Route path="about" element={<About />} />
      <Route path="" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
