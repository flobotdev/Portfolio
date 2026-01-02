import './App.css';
import SideNav from "./components/SideNav";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Footer from "./components/sections/Footer";
import Experience from "./components/sections/Experience";
import References from "./components/sections/References";
import Projects from "./components/sections/Projects";

function App() {
  return (
     <div className="app-layout">
      <SideNav />   
    <main className="main-content">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <References />
      <Footer />
      </main>
    </div>
  );
}

export default App;
