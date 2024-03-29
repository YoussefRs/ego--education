import { useEffect, useState } from "react";
import './App.css'
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";

import Footer from "./Components/Footer/Footer";
import Navigation from './Components/NavBar/Navigation'
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import OfferDetails from "./Components/E-Offers/Offer-details/Offer-details";
import { informatics } from "./Data/offers-details";
import News from "./Components/News/News";
import Main from "./Components/Offers/Offers";
import Loader from "./Components/Loader/Loader";
import Eoffers from "./Components/E-Offers/E-Offers";
import ChatBot from "./Components/ChatBot/ChatBot";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(location);
  }, [location]);

  const [loading, setLoading] = useState(false);

  setTimeout(() => setLoading(false), 3900);

  function renderSitemap() {
    return fetch('/site.xml')
      .then((response) => response.text())
      .then((xml) => new window.DOMParser().parseFromString(xml, 'text/xml'));
  }
  

  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
          <div className="App">
          <Navigation />
          {/* <ChatBot /> */}
          <Routes>
            <Route path="/sitemap.xml" element={renderSitemap} />
            <Route path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/courses" element={<Main />} />
            {informatics.map((info, i) => (
              <>
                <Route
                key={i}
                exact
                path={`/courses${info.path}`}
                element={<OfferDetails data={info} />}
              />
              </>
            ))}
            <Route path="/course" element={ <Eoffers /> }/>
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
