import About from "./components/About";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ServiceDetails from "./components/ServiceDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>

        <Route path="/about" element={<About />}></Route>
        <Route path="/service/:serviceName" element={<ServiceDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
