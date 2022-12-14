import { appTitle, appAuthor } from "../globals/globals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scroller from "../utilities/scroller";
//components
import Header from "../components/Header";
import Footer from "../components/Footer";
//pages
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageDetails from "../pages/PageDetails";
import PageFavorites from "../pages/PageFavorites";
import PageSubscribe from "../pages/PageSubscribe";
import PageThanks from "../pages/PageThanks";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="App">
        <Scroller />
        <Header title={appTitle} />

        {/* this main part changes by pages */}
        <main>
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/details" element={<PageDetails />} />
            <Route path="/favorites" element={<PageFavorites />} />
            <Route path="/subscribe" element={<PageSubscribe />} />
            <Route path="/thanks" element={<PageThanks />} />
          </Routes>
        </main>

        <Footer title={appTitle} author={appAuthor} />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
