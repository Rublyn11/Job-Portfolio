// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Banner from './components/banner';
import Nav from './components/nav';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Project from './components/projects';
import Testimonials from './components/testimonials';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Banner />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Testimonials />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
