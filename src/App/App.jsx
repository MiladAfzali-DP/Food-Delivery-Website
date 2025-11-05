import styles from "./App.module.css";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage/HomePage";
import SpecialOffers from "../pages/SpecialOffers/SpecialOffers";
import Restaurants from "../pages/Restaurants/Restaurants";
import TrackOrder from "../pages/TrackOrder/TrackOrder";
import NotFound from "../pages/NotFound/NotFound";
export default function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
