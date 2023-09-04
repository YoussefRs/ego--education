import { useEffect, useState } from "react";
import './App.css'
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from "./Components/Home";
import Loading from "./Components/Loading/Loading";
import Footer from "./Components/Footer/Footer";

function App() {

  const [loading, setLoading] = useState(false);

  setTimeout(() => setLoading(false), 3900);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
