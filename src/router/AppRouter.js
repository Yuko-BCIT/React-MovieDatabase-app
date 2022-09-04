import { appTitle, appAuthor } from "../globals/globals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Header from "../components/Header";
import Footer from "../components/Footer";
//pages
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageIndividual from "../pages/PageIndividual";
import PageFavorites from "../pages/PageFavorites";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title={appTitle} />

        {/* this main part changes by pages */}
        <main>
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/details" element={<PageIndividual />} />
            <Route path="/favorites" element={<PageFavorites />} />
            {/* <Route path="/movie/:id" element={<PageIndividual />} /> */}
          </Routes>
        </main>

        <Footer title={appTitle} author={appAuthor} />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
