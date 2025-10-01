import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';
import './media.css';

const App = () => {
  useEffect(() => {
    // Add navigation smooth scroll
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
        // Close menu if open
        const navbarToggle = document.querySelector('.navbar-toggle');
        if (navbarToggle && navbarToggle.classList.contains('active')) {
          navbarToggle.classList.remove('active');
          document.querySelector('.navbar-collapse').classList.remove('show');
        }
      });
    });

    // WhatsApp link
    const whatsappLink = document.getElementById('whatsappLink');
    if (whatsappLink) {
      whatsappLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.open(whatsappLink.href, '_blank');
      });
    }

    // Particles.js if needed, but not present
    // if (window.particlesJS) {
    //   particlesJS.load('particles-js', 'assets/particles.json', function() {
    //     console.log('callback - particles.js config loaded');
    //   });
    // }

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
      if (whatsappLink) {
        whatsappLink.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <hr />
      <Education />
      <hr />
      <Skills />
      <Certificates />
      <Projects />
      <Internships />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;