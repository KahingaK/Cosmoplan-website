
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';


function App() {
  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white">
        
        <Header/>  
        <Home/>
        <About/>
        <Services/>
        <Footer/>
        
    </div>
  );
}

export default App;
