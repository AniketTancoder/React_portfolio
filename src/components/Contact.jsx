import React from 'react';

const Contact = () => {
  return (
    <>
      <hr className="seapration" />
      <section className="contact" id="contact">
        <h2>Let's Keep in-<span>Touch</span></h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="address">
              <p>
                A/P : Titawe , Radhanagari ,<br /> Kolhapur , Mharashtra 416-208 <br /> Contact No. : 8237979061
              </p>
            </div>
            <div className="contact-icons">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aniketpatil192847@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-gmail' style={{ color: '#ffee10' }}></i>
              </a>
              <a href="https://instagram.com/ankyap_anderson" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-instagram' style={{ color: '#ffee10' }}></i>
              </a>
              <a href="https://linkedin.com/in/aniket-patil-543694259" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-linkedin-square' style={{ color: '#ffee10' }}></i>
              </a>
              <a href="https://github.com/AniketTancoder" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-github' style={{ color: '#ffee10' }}></i>
              </a>
            </div>
          </div>
          <form id="contactForm" action="mailto:aniketpatil192847@gmail.com" method="post" encType="text/plain">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;