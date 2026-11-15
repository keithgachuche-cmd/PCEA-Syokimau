import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import ServicesDistricts from "./pages/ServicesDistricts";
import MinistriesGroups from "./pages/MinistriesGroups";
import SocialMedia from "./pages/SocialMedia";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services-districts" element={<ServicesDistricts />} />
          <Route path="/ministries-groups" element={<MinistriesGroups />} />
          <Route path="/social-media" element={<SocialMedia />} />
        </Routes>
      </main>
    </>
  );
}