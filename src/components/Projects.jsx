import React from 'react';

const Projects = () => {
  return (
    <>
      <hr />
      <h1 className="sub-title">My <span>Projects</span></h1>
      <section>
        <div id="portfolio" className="Project">
          <div className="main-text" id="Project">
            <div className="portfolio-content">
              <div className="row">
                <img src="/img/cicd1.jpg" alt="Traffic Alert System" />
                <div className="layer">
                  <h5>CI/CD PIPELINE DASHBOARD</h5>
                  <p>I developed a responsive React and Node.js web application and automated its deployment using a CI/CD pipeline. Using Terraform, I provisioned the AWS infrastructure as code for consistency and scalability. The pipeline, built with GitHub Actions, Docker, and Kubernetes, enabled seamless, automated testing and deployment.</p>
                  <a href="https://github.com/AniketTancoder/personal-dashboard" target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-link-external' style={{ color: 'skyblue' }}></i>
                  </a>
                </div>
              </div>
              <div className="row">
                <img src="/img/ecommerce.jpg" alt="E-commerce" />
                <div className="layer">
                  <h5>E-COMMERCE WEBSITE</h5>
                  <p>A responsive e-commerce website ensures seamless shopping experiences across all devices. Technologies like HTML5, CSS3, and JavaScript handle layout adjustments and interactivity, while frameworks like Bootstrap or Foundation streamline responsive design.</p>
                  <a href="https://github.com/AniketTancoder/E-Commerce-website" target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-link-external' style={{ color: 'skyblue' }}></i>
                  </a>
                </div>
              </div>
              <div className="row">
                <img src="/img/ht.jpeg" alt="Hotel Booking" />
                <div className="layer">
                  <h5>HOTEL BOOKING SITE</h5>
                  <p>A hotel booking website lets users search, compare, and book accommodations online, with filters, reviews, and secure payment options for a smooth experience. It often provides booking confirmations and customer support for added convenience.</p>
                  <a href="https://github.com/AniketTancoder/Hotel-Booking-website" target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-link-external' style={{ color: 'skyblue' }}></i>
                  </a>
                </div>
              </div>
             
              <div className="row">
                <img src="/img/bg (1).jpg" alt="Bus App" />
                <div className="layer">
                  <h5>BUS_APP</h5>
                  <p>A MERN stack Bus Ticket Booking application with user authentication, profile management, and a seat selection system. It features secure login with Passport.js, MongoDB Atlas for data storage, and a token-based authentication system. Users can search buses, select seats, and view ticket details, but payment processing and dynamic seat storage are not included in this version.</p>
                  <a href="https://github.com/AniketTancoder/Voice-assistant-using-python" target="_blank" rel="noopener noreferrer">
                    <i className='bx bx-link-external' style={{ color: 'skyblue' }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Projects;