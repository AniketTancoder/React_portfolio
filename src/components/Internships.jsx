import React, { useEffect } from 'react';

const Internships = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll('.internship-box');
    boxes.forEach(box => {
      const button = box.querySelector('.btn-box');
      if (button) {
        button.addEventListener('click', () => {
          const details = box.querySelector('.details');
          if (details) {
            details.classList.toggle('hidden');
          }
        });
      }
    });

    return () => {
      boxes.forEach(box => {
        const button = box.querySelector('.btn-box');
        if (button) {
          button.removeEventListener('click', () => {
            const details = box.querySelector('.details');
            if (details) {
              details.classList.toggle('hidden');
            }
          });
        }
      });
    };
  }, []);

  return (
    <section className="internships" id="internships">
      <div className="container">
        <h1 className="sub-title">My <span>Internships</span></h1>
        <div className="internship-list">
          <div className="internship-box">
            <h2>ASDR Infotech LTD. Pune</h2>
            <p>As a Java Full Stack Developer, I have experience working on both the front end and back end of web applications. I use Java and Spring Boot to build robust backend services and APIs. For the front end, I work with HTML, CSS, JavaScript, and frameworks like React or Angular to create responsive user interfaces. I manage data using databases like MySQL or MongoDB. I understand the full software development lifecycle, from designing to deploying applications. I use tools like Git for version control and Maven for project management. I build RESTful APIs to enable smooth communication between the frontend and backend. I ensure my applications are secure, scalable, and user-friendly. I also work with deployment tools like Docker and cloud platforms such as AWS. My goal is to deliver complete and efficient web solutions.</p>
          </div>
          <div className="internship-box">
            <h2>Expedite Informatics, Pune</h2>
            <p>As a MERN Stack Developer, I specialize in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I design and develop responsive front-end interfaces using React.js and manage state with tools like Redux. On the back end, I create RESTful APIs with Node.js and Express.js to handle server-side logic. I use MongoDB as the database to store and retrieve application data efficiently. I have experience with full project lifecycles, from development to deployment. I use tools like Git for version control and Postman for API testing. My applications are optimized for performance, security, and scalability. I ensure smooth integration between front-end and back-end components. I also deploy applications using platforms like Heroku. My goal is to deliver seamless, user-friendly, and efficient web solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;