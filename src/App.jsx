import { useEffect, useState } from "react";
import './App.css'
import { Route, Routes, useLocation } from "react-router-dom";
import ThemeProvider from "./Context/themeProvider";
import Home from "./Components/Home";
import Loading from "./Components/Loading/Loading";
import Footer from "./Components/Footer/Footer";
import Navigation from './Components/NavBar/Navigation'
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Eoffers from "./Components/E-Offers/E-Offers";
import OfferDetails from "./Components/E-Offers/Offer-details/Offer-details";
import { informatics } from "./Data/offers-details";
import News from "./Components/News/News";
import Main from "./Components/Offers/Offers";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(location);
  }, [location]);

  const [loading, setLoading] = useState(false);

  setTimeout(() => setLoading(false), 3900);

  function renderSitemap() {
  return (
      <>
        {`<?xml version="1.0" encoding="UTF-8"?>
        <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
          <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
          <url>
            <loc>https://www.ego-education.eu/</loc>
            <lastmod>2023-09-16T14:50:09+00:00</lastmod>
          </url>
        </urlset>`}
      </>
    );
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ThemeProvider>
          <div className="App">
          <Navigation />
          <Routes>
            <Route path="/sitemap.xml" element={renderSitemap} />
            <Route path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/educational-offers" element={<Main />} />
            {informatics.map((info) => (
              <>
                <Route
                key={info.title}
                exact
                path={`/educational-offers${info.path}`}
                element={<OfferDetails data={info} />}
              />
              </>
            ))}
          </Routes>
          {/* <Background className="particles" /> */}
          <Footer />
        </div>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
