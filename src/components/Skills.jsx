import React, { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(c => {
      c.addEventListener('mouseenter', hoverEffects);
      c.addEventListener('mouseleave', leaveEffects);
      c.addEventListener('click', turnEffects);
    });

    return () => {
      cards.forEach(c => {
        c.removeEventListener('mouseenter', hoverEffects);
        c.removeEventListener('mouseleave', leaveEffects);
        c.removeEventListener('click', turnEffects);
      });
    };
  }, []);

  // Functions from main.js
  function hoverEffects({ currentTarget: card }) {
    const wrapper = card.parentElement;
    wrapper.style.zIndex = '2';
    card.style.transform = card.classList.contains('is-turned') ? 'translateZ(50px) rotateY(180deg)' : 'translateZ(50px)';
    card.querySelector('.front .pic-holder').style.transform = 'translateZ(60px)';
    const siblingsRight = getSiblingCards(wrapper, 'next');
    const siblingsLeft = getSiblingCards(wrapper, 'prev');
    adjustSiblings(siblingsRight, 'next');
    adjustSiblings(siblingsLeft, 'prev');
  }

  function leaveEffects({ currentTarget: card }) {
    card.style.transform = card.classList.contains('is-turned') ? 'rotateY(180deg)' : '';
    const wrapper = card.parentElement;
    wrapper.style.zIndex = '0';
    const siblingsRight = getSiblingCards(wrapper, 'next');
    const siblingsLeft = getSiblingCards(wrapper, 'prev');
    resetSiblings(siblingsRight);
    resetSiblings(siblingsLeft);
  }

  function turnEffects({ currentTarget: card }) {
    card.classList.toggle('is-turned');
    if (card.matches(':hover')) {
      card.style.transform = card.classList.contains('is-turned') ? 'translateZ(50px) rotateY(180deg)' : 'translateZ(50px)';
    } else {
      card.style.transform = card.classList.contains('is-turned') ? 'rotateY(180deg)' : '';
    }
  }

  function getSiblingCards(wrapper, type) {
    let currentWrapper = type === 'next' ? wrapper.nextElementSibling : wrapper.previousElementSibling;
    const array = [];
    if (currentWrapper) {
      do {
        array.push(currentWrapper.querySelector('.card'));
        currentWrapper = type === 'next' ? currentWrapper.nextElementSibling : currentWrapper.previousElementSibling;
      } while (currentWrapper);
    }
    return array;
  }

  function adjustSiblings(array, type) {
    let offsetImmediate = type === 'next' ? -20 : 20;
    let offset = type === 'next' ? -20 : 20;
    let angleFirst = type === 'next' ? '35deg' : '-35deg';
    let angleSecond = type === 'next' ? '25deg' : '-25deg';
    array.forEach((card, index) => {
      let wrapper = card.parentElement;
      switch (index) {
        case 0:
          wrapper.style.zIndex = '1';
          wrapper.style.transform = `translateX(${offsetImmediate}px)`;
          card.style.transform = `rotateY(${angleFirst})`;
          card.querySelector('.front .pic-holder').style.transform = 'translateZ(60px)';
          break;
        case 1:
          wrapper.style.zIndex = '0';
          wrapper.style.transform = `translateX(${offsetImmediate * 2}px)`;
          card.style.transform = `rotateY(${angleSecond}) translateZ(-50px)`;
          card.querySelector('.front .pic-holder').style.transform = 'translateZ(60px)';
          break;
        default:
          wrapper.style.transform = `translateX(${offset * (index * 2)}px)`;
          card.style.transform = 'translateZ(-70px)';
          break;
      }
    });
  }

  function resetSiblings(array) {
    array.forEach(card => {
      card.style.transform = '';
      card.parentElement.style.transform = '';
      card.querySelector('.front .pic-holder').style.transform = 'translateZ(0)';
    });
  }

  return (
    <>
      <h1 className="sub-title" id="skills">My <span>Programming Skills</span></h1>
      <section id="skills" className="secPad white">
        <div className="container">
          <div className="heading">
            <p className="mrgBtm20">I have a solid foundation in web development, with expertise in HTML, CSS, and JavaScript for creating dynamic and responsive interfaces. My proficiency in React.js, Node.js, and Express.js allows me to design and implement scalable full-stack applications, while my knowledge of REST APIs, MongoDB, MySQL, Firebase, and SQL enables me to build and manage robust databases. I am skilled in Java for object-oriented programming and Python for data-driven applications and automation. Additionally, I have hands-on experience with AWS, Docker, Git, and CI/CD pipelines, ensuring smooth deployment and cloud integration. My background also includes testing and debugging using Postman, JMeter, and Selenium, which strengthens the quality and reliability of my applications.</p>
          </div>
          <div className="col-sm-6">
            <br />
            <br />
            <div id="wrapper">
              <div className="cwrapper">
                <div className="card html">
                  <div className="front">
                    <div className="pic-holder"></div>
                    <h2>MERN</h2>
                  </div>
                  <div className="back">
                    <p>Developed and maintained scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), focusing on building responsive frontends and robust backends.
Implemented RESTful APIs, authentication systems, and database integrations to deliver secure, high-performance solutions.</p>
                  </div>
                </div>
              </div>
              <div className="cwrapper">
                <div className="card css">
                  <div className="front">
                    <div className="pic-holder"></div>
                    <h2>AWS</h2>
                  </div>
                  <div className="back">
                    <p>I automated and deployed a CI/CD pipeline on AWS using Terraform, GitHub Actions, Docker, and Kubernetes to ensure scalable and efficient application hosting.</p>
                  </div>
                </div>
              </div>
              <div className="cwrapper">
                <div className="card js">
                  <div className="front">
                    <div className="pic-holder"></div>
                    <h2>Git & Github</h2>
                  </div>
                  <div className="back">
                    <p>I managed all project code using Git and GitHub, employing branching strategies and pull requests to maintain code quality and enable seamless team collaboration.</p>
                  </div>
                </div>
              </div>
              <div className="cwrapper">
                <div className="card vue">
                  <div className="front">
                    <div className="pic-holder"></div>
                    <h2>JAVA</h2>
                  </div>
                  <div className="back">
                    <p>I used Java for backend development with Spring Boot to build robust APIs and also utilized it for Android application development in Android Studio.</p>
                  </div>
                </div>
              </div>
              <div className="cwrapper">
                <div className="card python">
                  <div className="front">
                    <div className="pic-holder"></div>
                    <h2>SQL</h2>
                  </div>
                  <div className="back">
                    <p>I used SQL to build and interact with relational databases from the backend, ensuring secure and performant data operations for both web and mobile applications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;