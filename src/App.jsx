import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
 // Import BrowserRouter
import Header from './components/Header';
import Introduction from './components/Introduction';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router> {/* Wrap your entire app with BrowserRouter */}
      <div>
        <Header />
        <main>
          <Introduction />
          <Services />
          <Projects />
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
