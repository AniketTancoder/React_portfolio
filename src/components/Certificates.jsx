import React from 'react';

const Certificates = () => {
  return (
    <>
      <hr />
      <h1 className="sub-title" id="Certificates">My <span>Certificates</span></h1>
      <section>
        <div className="certificate-section">
          <div className="certificate-box">
            <img src="/certi/meta front.jpeg" alt="Certificate 1" />
            <a href="/certi/intro to frontend certificate.pdf" download>Download Certificate</a>
          </div>
          <div className="certificate-box">
            <img src="/certi/java.jpeg" alt="Certificate 2" />
            <a href="/certi/html css js certificate.pdf" download>Download Certificate</a>
          </div>
          <div className="certificate-box">
            <img src="/certi/google_cloud.jpeg" alt="Certificate 3" />
            <a href="/certi/google cloud certificate.pdf" download>Download Certificate</a>
          </div>
          <div className="certificate-box">
            <img src="/certi/msbackend.png" alt="Certificate 4" />
            <a href="/certi/backend MS.pdf" download>Download Certificate</a>
          </div>
          <div className="certificate-box">
            <img src="/certi/aws.jpeg" alt="Certificate 5" />
            <a href="/certi/aws architecting soln certificate.pdf" download>Download Certificate</a>
          </div>
          <div className="certificate-box">
            <img src="/certi/aws.png" alt="Certificate 6" />
            <a href="/certi/aws technical essentials.pdf" download>Download Certificate</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificates;