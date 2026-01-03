import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import SideNav from "./components/SideNav";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Footer from "./components/sections/Footer";
import Experience from "./components/sections/Experience";
import References from "./components/sections/References";

// Lazy load heavy components
const Projects = lazy(() => import("./components/sections/Projects"));
const DayZMods = lazy(() => import("./components/sections/projects/DayZMods"));
const ProjectLuna = lazy(() =>
  import("./components/sections/projects/ProjectLuna")
);
const ProjectUnicorn = lazy(() =>
  import("./components/sections/projects/ProjectUnicorn")
);
const ProjectPortfolio = lazy(() =>
  import("./components/sections/projects/ProjectPortfolio")
);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainPortfolio() {
  return (
    <div className="app-layout">
      <SideNav />
      <main className="main-content">
        <Hero />
        <Skills />
        <Suspense fallback={<div className="loading">Loading projects...</div>}>
          <Projects />
        </Suspense>
        <Experience />
        <References />
        <Footer />
      </main>
    </div>
  );
}

function ProjectPage({ children }) {
  return (
    <div className="app-layout">
      <SideNav />
      <main className="main-content">{children}</main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route
          path="/projects/dayz-mods"
          element={
            <ProjectPage>
              <Suspense
                fallback={<div className="loading">Loading project...</div>}
              >
                <DayZMods />
              </Suspense>
            </ProjectPage>
          }
        />
        <Route
          path="/projects/luna"
          element={
            <ProjectPage>
              <Suspense
                fallback={<div className="loading">Loading project...</div>}
              >
                <ProjectLuna />
              </Suspense>
            </ProjectPage>
          }
        />
        <Route
          path="/projects/unicorn"
          element={
            <ProjectPage>
              <Suspense
                fallback={<div className="loading">Loading project...</div>}
              >
                <ProjectUnicorn />
              </Suspense>
            </ProjectPage>
          }
        />
        <Route
          path="/projects/portfolio"
          element={
            <ProjectPage>
              <Suspense
                fallback={<div className="loading">Loading project...</div>}
              >
                <ProjectPortfolio />
              </Suspense>
            </ProjectPage>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
