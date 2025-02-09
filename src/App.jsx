import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroPage from './components/HeroPage';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import ContactUs from './components/ContactUs';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route 
              path="/" 
              element={
                <>
                  <section id="hero">
                    <HeroPage />
                  </section>
                  <section id="services">
                    <Services />
                  </section>
                  <section id="projects">
                    <Projects />
                  </section>
                </>
              } 
            />
            {/* Project Details Page */}
            <Route path="/projectdetails/:id" element={<ProjectDetails />} />

            {/* Contact Us Page (Now a Separate Route) */}
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
