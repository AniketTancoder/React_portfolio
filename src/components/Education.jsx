import React from 'react';

const Education = () => {
  return (
    <section>
      <div className="services" id="education">
        <div className="container">
          <h1 className="sub-title">My <span>Education</span></h1>
          <div className="services-list">
            <div>
              <i className='bx bxs-graduation bx-tada' style={{ color: '#ffee10' }}></i>
              <h2>Bachelor Of Engineering</h2>
              <p>I have successfully completed my Bachelor’s in Computer Science and Engineering from Sanjay Ghodawat University, Kolhapur, graduating with a CGPA of 8.50. Throughout my academic journey, I gained a strong foundation in core engineering and computer science principles, while also building practical skills in modern technologies. My education has equipped me with the ability to analyze complex problems, design efficient solutions, and apply my knowledge to real-world scenarios.</p>
              <a href="/docs/B.Tech results.pdf" download>
                <i className='bx bx-exit' style={{ color: '#ffee10' }}></i>
              </a>
            </div>
            <div>
              <i className='bx bxs-graduation bx-tada' style={{ color: '#ffee10' }}></i>
              <h2>Higher Secondary Education (12th)</h2>
              <p>I had done my 12th in Central Board Of Secondary Education (CBSE), with a commendable 86.6% scaled marks, completed in the 2020-2021 batch. Alumni of the Jawahar Navodaya Vidyalaya,Rajapur , Ratnagiri. Equipped with comprehensive knowledge and practical skills, ready to contribute effectively in the engineering domain with a strong foundation laid at Ratnagiri.</p>
              <a href="/docs/12 th marksheet.pdf" download>
                <i className='bx bx-exit' style={{ color: '#ffee10' }}></i>
              </a>
            </div>
            <div>
              <i className='bx bxs-graduation bx-tada' style={{ color: '#ffee10' }}></i>
              <h2>Secondary School Certificate (10th)</h2>
              <p>Secured a commendable 92.6% aggregate in the SSC board examinations from Jawahar Navodaya Vidyalaya, Ratnagiri. With a solid academic foundation established during secondary education, I embarked on a journey of continuous learning, paving the way for further academic achievements and personal growth in subsequent pursuits.</p>
              <a href="/docs/10 th marksheet.pdf" download>
                <i className='bx bx-exit' style={{ color: '#ffee10' }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;