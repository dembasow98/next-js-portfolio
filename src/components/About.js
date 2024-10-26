// import Image from "next/image";
import { useEffect, useState } from 'react';

const About = () => {

  const [clientOnly, setClientOnly] = useState(false);

  useEffect(() => {
    setClientOnly(true);
  }, []);
  
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      {clientOnly && (
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="/static/img/personal/home.png" title="Demba Sow Full stack web developer" alt="Demba Sow Full stack web developer" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} Junior Machine Learning Engineer{" "}
                </h3>
                 <p>
                    I am a recent Computer Engineering graduate from Sakarya University, skilled in Python, C++, and JavaScript frameworks like Next.js, Node.js, and Express.js. 
                    With over two years of experience in AI and machine learning, I specialize in LLMs, generative AI, NLP, image processing, and computer vision, while adhering to clean code practices and OOP design principles.
                    
                    I have led the Mauritanian Student Federation at my university for two years and participated in Erasmus for two semesters, including completing an Erasmus+ internship. 
                    Currently, I serve as a Student Graduate Leader at the Türkiye Maarif Foundation and am pursuing a Master&apos;s in AI & Data Science at Özyeğin University, where I also work as a Teaching Assistant.

                    In my free time, I work on my ongoing research project, &apos;Optic Exam Reader,&apos; where I aim to build a revolutionary system capable of extracting full information from any type of OCR exam paper simply
                    by taking a photo—without prior knowledge of the paper&apos;s structure or template. This project builds upon existing work by multiple researchers and seeks to push the boundaries of OCR technology.

                    Beyond my academic and professional endeavors, mentoring is a personal passion. On platforms like Superprof and Preply,
                    I have helped hundreds of students learn English and French, and supported many in preparing for TOEFL, IELTS exams, and job interviews. 
                    Fluent in six languages, including English, French, Turkish, Arabic, Portuguese, and Fulani, I am currently improving my Spanish and learning Italian. 
                    Mentoring brings me great fulfillment, as I enjoy helping others succeed.
                  </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">32</span>
                      <div className="media-body">
                        Projects <br />
                        Completed.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">25</span>
                      <div className="media-body">
                        Satisfied <br />
                        Clients.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contactus">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#work">
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2017 - 2018</span>
                <h6>First @TMV and 50th in Mauritanian Baccalaureat - Maths & Biology</h6>
                <p> Turkiye Maarif Foundation</p>
              </li>
              <li>
                <span>2019-2023</span>
                <h6>Fully Funded Scholarship Computer Engineer - Bachelor Degree</h6>
                <p>Sakarya University - Sakarya/Turkiye</p>
              </li>
              <li>
                <span>2021-2022</span>
                <h6>Computer Engineering - Erasmus+ EU Students Exchange Program</h6>
                <p>IPVC- Viana do Castelo/Portugal</p>
              </li>
              <li>
                <span>2024-Now</span>
                <h6>Data Science - Masters Degree</h6>
                <p>Özyeğin University - Istanbul/Turkiye</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} a Computer Engineer, Proficient With Python & C++ with over 2 years of
                experience. I have been Freelancing for the past 2 years. I code and create machine learning solutions for amazing people
                around the world. I like to work with new people. New people new
                Experiences.
              </p>
              
              {/* /skill */}
              <div className="skill-lt">
                <h6>AI & Machine Learning</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "98%" }}>
                    <span data-toggle="tooltip" title="98%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Software Engineering</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "95%" }}>
                    <span data-toggle="tooltip" title="95%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Content Writing</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="90%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
               {/* /skill */}
               <div className="skill-lt">
                <h6>Foreign Languages</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "85%" }}>
                    <span data-toggle="tooltip" title="100%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="/static/img/experience/carcheckup-logo.png" title="CarCheckUp" alt="CarCheckUp UK based car report provider" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Junior Software Engineer | Cloud & DevOps | Content Writer</h6>
                  <label>CarCheckUp | Remote | July 2023 - October 2023</label>
                  <div className="rb-time">Part Time</div>
                  <p>

                    <ul>
                      <li>
                       Developed and launched a machine learning-powered car history report web application, increasing daily visitor engagement by 300%.
                      </li>
                      <li>
                          Integrated UK and Experian Data APIs to enhance data accuracy and reliability. 
                      </li>
                      <li>
                      Optimized application performance, leading to a fourfold increase in daily visitors through effective content writing and code enhancements.
                      </li>
                      <li>
                      Implemented CI/CD pipelines, streamlining the deployment process and reducing release times.
                      </li>
                      <li>
                      Deployed and optimized machine learning APIs on AWS, reducing inference latency by 40%.
                      </li>
                      <li>
                      Particularly worked on the SEO improvement of the website and wrote content for the blog improving the website traffic by 10 times.
                      </li>
                      <li>
                      Conducted peer code reviews and quality assurance activities, ensuring high-quality code and robust application performance.
                      </li>
                      <li>
                      Contributed to the development, test and deployment of the android application for the product using Google Cloud Console.
                      </li>
                    </ul>
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="/static/img/experience/work3-logo.png" title="Work3 teknoloji a.ş" alt="Work3 teknoloji startup şirketi sakarya university teknokent" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Engineer – AI & Machine Learning</h6>
                  <label>Work3 Teknoloji a.s | Hybrid | October 2023 - July 2024</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    <ul>
                      <li>Established processes for incident, problem, and change management, enhancing system reliability and operational efficiency.</li>
                      <li>Developed full-stack applications with a focus on reliability and stability, ensuring robust performance.</li>
                      <li>Worked closely with cross-functional teams to design and implement key features for internal applications.</li>
                      <li>Developed and deployed multi-dimensional models and edge AI algorithms to enhance predictive accuracy, improving patient outcomes by 20%.</li>
                      <li>Enhanced AI model accuracy by 15% through hyperparameter tuning and rigorous cross-validation using TensorFlow and Keras.</li>
                      <li>Utilized cloud services such as AWS for deployment and data management.</li>
                      <li>Managed CI/CD pipelines, streamlining deployment processes and reducing release times.</li>
                    </ul>

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="/static/img/experience/sakarya-university-logo.png" title="Sakarya University SAU" alt="Sakarya University Turkiye Public University" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Final Year Computer Engineer Project</h6>
                  <label>Sakarya University | Hybrid | Jan 2023 - Jun 2023</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    <ul>
                    <li>Developed *OHARA BOOKSHELF*, a top-rated smart book recommendation web app, in collaboration with faculty and peers.</li>
                    <li>Implemented personalized recommendations using content-based, collaborative, and hybrid filtering, enhanced by real-time facial emotion recognition via CNN.</li>
                    <li>Built a user-friendly frontend with React.js and Tailwind CSS, supported by a robust backend using Node.js, Express.js, and MongoDB.</li>
                    <li>Employed Selenium for web scraping to create a comprehensive dataset of book details and reviews, improving recommendation quality.</li>
                    <li>Ensured secure deployment via Docker and AWS with JWT-based authentication for user management and high availability.</li>
                    </ul>
                  </p>
                </div>
              </div>
              
            </div>
          </div>

          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="/static/img/experience/just-english.jpeg" title="Just English Language Center" alt="Just English" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Just English - English Language Tutor</h6>
                  <label>Sakarya University | On-Site | Jun 2023 - Jully 2023</label>
                  <div className="rb-time">Part Time</div>
                  <p>
                    <ul>
                      <li>Instruct B1 and C1 level English classes with over 20 students per class, fostering engaging and effective language acquisition.</li>
                      <li>Provide private English and French tutoring tailored to individual needs and learning goals.</li>
                      <li>Prepare students for English proficiency exams, including IELTS, with a focus on test strategies and skill development.</li>
                      <li>Organize and lead speaking clubs to enhance conversational skills, confidence, and fluency.</li>
                    </ul>
                  </p>
                </div>
              </div>
              
            </div>
          </div>

          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="/static/img/experience/preply.png" title="Preply Online Teaching Platform" alt="Preply" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Preply - English Language and IELTS tutor</h6>
                  <label>Brookline, United States | Online |July 2024 - Now</label>
                  <div className="rb-time">Part Time</div>
                  <p>
                    <ul>
                    <li>Teach English to adult learners across all levels, from beginner (A0) to advanced (C1), with a focus on tailored learning strategies.</li>
                    <li>Provide private English and French lessons adapted to individual goals, including job-related language skills.</li>
                    <li>Prepare students for English proficiency exams, such as IELTS, focusing on exam strategies and skill development.</li>
                    <li>Coach students for job interviews, covering language skills, cultural expectations, and interview techniques.</li>
                    <li>Conduct conversational practice sessions to enhance confidence and fluency in professional and casual contexts.</li>
                    </ul>
                  </p>
                </div>
              </div>
              
            </div>
          </div>

          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="/static/img/experience/american-time.jpg" title="American Time Language Teaching" alt="American Time" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>American Time - English Language Mentor</h6>
                  <label>Istanbul, Turkiye | On-site | August 2024 - October 2024</label>
                  <div className="rb-time">Part Time</div>
                  <p>
                    <ul>
                    <li>Taught A2, B1, and B2 level English classes, enhancing student engagement and motivation through interactive lessons.</li>
                    <li>Conducted seminars on effective language-learning strategies, inspiring students to adopt proactive approaches to learning English.</li>
                    <li>Promoted a positive learning environment, motivating the overall student body to be more enthusiastic and committed to improving their English skills.</li>
                    <li>Provided targeted support to students, helping them set language goals and track progress in line with their individual needs.</li>
                    </ul>
                  </p>
                </div>
              </div>
              
            </div>
          </div>

          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="/static/img/experience/superprof.png" title="Superprof Online Teaching Platform" alt="Superprof" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Superprof - English/French/ IELTS Mentor and AI/Machine Learning Freelancer</h6>
                  <label>Paris, Île-de-France | Online | Jan 2024 - Now</label>
                  <div className="rb-time">Part Time</div>
                  <p>
                    <ul>
                    <li>Nominated as a Leader, the highest level for instructors on Superprof, recognizing excellence in mentoring and student success.</li>
                    <li>Assisted hundreds of students in reaching their IELTS target scores through personalized instruction, skill development, and motivation.</li>
                    <li>Mentored students to excel in job interviews, providing guidance on effective responses, performance techniques, and confidence-building strategies for both English and French.</li>
                    <li>Instruct Python and C++ to students and professionals, specializing in AI/Machine Learning concepts and project-based learning.</li>
                    <li>Freelanced in AI/Machine Learning, supporting clients in project development, data processing, and algorithm implementation.</li>
                    </ul>
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      )}
    </section>
  );
};

export default About;
