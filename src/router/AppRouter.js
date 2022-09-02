import { appTitle, appAuthor } from "../globals/globals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
//components
import Header from "../components/Header";
import Footer from "../components/Footer";
//pages
import PageHome from "../pages/PageHome";
import PageIndividual from "../pages/PageIndividual";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title={appTitle} />

        {/* this main part changes by pages */}
        <main>
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            {/* <Route path="/movie/:id" element={<PageIndividual />} /> */}
            <Route path="/movie" element={<PageIndividual />} />


          </Routes>
        </main>

        <Footer title={appTitle} author={appAuthor} />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
