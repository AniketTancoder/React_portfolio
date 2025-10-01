import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [isNeonBoxOpen, setIsNeonBoxOpen] = useState(false);
  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js if needed, but since it's global, perhaps not necessary here
    // Assuming Typed.js is loaded globally
  }, []);

  const handleMoreAboutMeClick = (event) => {
    event.preventDefault();
    setIsNeonBoxOpen(!isNeonBoxOpen);
  };

  const handleCloseNeonBox = () => {
    setIsNeonBoxOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const neonBox = document.getElementById('neonBox');
      const btnBox = document.querySelector('.btn-box');
      if (neonBox && !neonBox.contains(event.target) && event.target !== btnBox) {
        setIsNeonBoxOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>
          <span style={{ color: '#ffee10' }}>Hello,</span> It's Me
        </h3>
        <h1>
          Aniket <span style={{ color: '#ffee10' }}>Patil</span>
        </h1>
        <p>
          I’m passionate about Full Stack Development and well skilled in frontend and backend technologies, with expertise in React.js, Node.js, Java, and MongoDB. I specialize in building scalable, responsive, and efficient web applications with seamless user experiences. Additionally, I have hands-on experience with AWS cloud services, along with testing and automation frameworks, and implementing CI/CD pipelines to ensure high-quality, reliable, and continuous delivery of applications.
        </p>
        <div className="home-sci">
          <a href="https://wa.me/8237979061" style={{ '--i': 7 }} target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-whatsapp'></i>
          </a>
          <a href="https://instagram.com/ankyap_anderson" style={{ '--i': 8 }} target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-instagram'></i>
          </a>
          <a href="https://linkedin.com/in/aniket-patil-543694259" style={{ '--i': 9 }} target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aniketpatil192847@gmail.com" style={{ '--i': 10 }} target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-gmail'></i>
          </a>
        </div>
        <a href="#aboutme" className="btn-box" onClick={handleMoreAboutMeClick}>More About Me</a>
        <a href="/docs/Aniket__Patil_8237979061.pdf" download className="btn-box download-btn">Download CV</a>
        <div id="neonBox" className={`neon-box ${isNeonBoxOpen ? 'active' : ''}`}>
          <h2>More About Me</h2>
          <p>
            Welcome to my Profile. My name is Aniket Dayanand Patil , pursuing B.Tech degree in Computer Science and Engineering stream at Sanjay Ghodawat University , Kolhapur. I have a strong foundation in full-stack development, with expertise in both frontend and backend technologies. I am well skilled in React.js and Node.js for building dynamic web applications, along with Java and MongoDB for backend development and database management.
            Additionally, I have hands-on experience with SQL,REST APIs, authentication, and CRUD operations ,testing tools like postman and jmeter for load testing, which I have implemented in various projects.
            I am always eager to improve my coding skills to develop efficient and scalable applications.
          </p>
          <button id="closeNeonBox" className="close-button" onClick={handleCloseNeonBox}>Close</button>
        </div>
      </div>
      <img src="/aniket.png" alt="profile photo" />
    </section>
  );
};

export default Home;