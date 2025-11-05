import styles from "./App.module.css";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage/HomePage";
import SpecialOffers from "../pages/SpecialOffers/SpecialOffers";
import Restaurants from "../pages/Restaurants/Restaurants";
import TrackOrder from "../pages/TrackOrder/TrackOrder";
import NotFound from "../pages/NotFound/NotFound";
import BrowseMenu from "../pages/BrowseMenu/BrowseMenu";
import Container from "../components/ui/Container/Container";
import TopBanner from "../components/TopBanner/TopBanner";
import Header from "../components/ui/Header/Header";
import Logo from "../components/ui/Logo/Logo";
import NavBar from "../components/NavBar/NavBar";
export default function App() {
  return (
    <div>
      <Container>
        <TopBanner />
        <Header>
          <Logo />
          <NavBar />
        </Header>
      </Container>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/browse-menu" element={<BrowseMenu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
