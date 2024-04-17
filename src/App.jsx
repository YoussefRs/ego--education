import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./globals/Navigation/Navigation";
import Home from "./pages/home/Home";
import SideBar from "./globals/Navigation/SideBar";
import Courses from "./pages/courses/Courses";
import CoursesDetails from "./pages/courses-details/CoursesDetails";
import Footer from "./globals/Footer/Footer";
import NotFound from "./pages/notFound/NotFound";
import About from "./pages/about/About";
import Elearning from "./pages/eLearning/Elearning";
import Loading from "./globals/Loading/Loading";
import EnrollementById from "./pages/enrollmentById/EnrollementById";
import Enrollment from "./pages/enrollment/Enrollment";

function Layout({ children }) {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <>
      <Navigation show={setShowSideMenu} />
      <SideBar show={showSideMenu} handleShow={setShowSideMenu} />
      {children}
      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/elearn"
            element={
              <Layout>
                <Elearning />
              </Layout>
            }
          />
          <Route
            path="/courses"
            element={
              <Layout>
                <Courses />
              </Layout>
            }
          />
          <Route
            path="/courses/:courseId"
            element={
              <Layout>
                <CoursesDetails />
              </Layout>
            }
          />
          <Route
            path="/apply/:id"
            element={
              <Layout>
                <EnrollementById />
              </Layout>
            }
          />
          <Route
            path="/apply"
            element={
              <Layout>
                <Enrollment />
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
