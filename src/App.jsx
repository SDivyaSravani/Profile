import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";


function App() {

  return (
    <div className="bg-[#171d32] first-line:h-auto w-full overflow-hidden">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Resume />
        <Footer />
    </div>
  );
  
}

export default App;
