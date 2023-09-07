import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ServiceDetails from "./components/ServiceDetails";
import ProjectDetail from "./components/ProjectDetail";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path = "home" element = {<LandingPage/>}></Route>   
        <Route path="/about" element={<Services />}></Route>        
        <Route path="/service/:serviceName" element={<ServiceDetails />} />
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/project/:titleName/:projectId" element={<ProjectDetail/>} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
