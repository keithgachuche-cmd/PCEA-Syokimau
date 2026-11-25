import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import ServicesDistricts from "./pages/ServicesDistricts";
import MinistriesGroups from "./pages/MinistriesGroups";
import SocialMedia from "./pages/SocialMedia";
import OurHistory from "./pages/OurHistory";
import ManagementStructure from "./pages/ManagementStructure";
import ChurchLeaders from "./pages/ChurchLeaders";
import MinistryDetail from "./pages/MinistryDetail";
import DistrictDetail from "./pages/DistrictDetail";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services-districts" element={<ServicesDistricts />} />
          <Route path="/ministries-groups" element={<MinistriesGroups />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/about/history" element={<OurHistory />} />
          <Route path="/about/structure" element={<ManagementStructure />} />
          <Route path="/about/leaders" element={<ChurchLeaders />} />
          <Route path="/ministries-groups/:slug" element={<MinistryDetail />} />
          <Route path="/services-districts/:slug" element={<DistrictDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}