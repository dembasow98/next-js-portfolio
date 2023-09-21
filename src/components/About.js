
const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/personal/home.png" title="Demba Sow Full stack web developer" alt="Demba Sow Full stack web developer" />
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
                  {`I'm`} a Full Stack Web Developer with over 3 years of
                  experience.{" "}
                </h3>
                <p>
                I'm a Computer Engineer experienced in Full Stack Web Development and Machine Learning. Originally from Mauritania, 
                I've spent 5 years in Turkey and a year in Portugal during an Erasmus exchange. I work as a freelancer specializing 
                in web development and content writing, and I'm passionate about AI and machine learning. I speark 7 languages, 
                including Fulani, English, French, Arabic, Turkish, Portuguese, and some Spanish.
                I'm a naturally curious individual constantly seeking self-improvement. 
                My strong work ethic fuels my ambition to achieve significant goals.
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
                <h6>Turkiye Maarif Foundation High School - Mauritania</h6>
                <p> Maths & Biology Degree </p>
              </li>
              <li>
                <span>2019-2023</span>
                <h6>Computer Engineer - Bachelor Degree</h6>
                <p>Sakarya University</p>
              </li>
              <li>
                <span>2021-2022</span>
                <h6>Engenharia de Computação - Erasmus+ EU Students Exchange Program</h6>
                <p>Polytechnic Institute of Viana do Castelo - IPVC</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} a Computer Engineer, Expertise Full Stack Web Development with over 3 years of
                experience. I have been Freelancing for the last 2 years. I code and create web elements for amazing people
                around the world. I like to work with new people. New people new
                Experiences.
              </p>
              
              {/* /skill */}
              <div className="skill-lt">
                <h6>Web Development</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "98%" }}>
                    <span data-toggle="tooltip" title="98%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>AI & Machine Learning</h6>
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
                    <span data-toggle="tooltip" title="85%" />
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
                  <img src="static/img/experience/carcheckup-logo.png" title="CarCheckUp" alt="CarCheckUp UK based car report provider" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Full Stack Developer | Content Writer</h6>
                  <label>CarCheckUp | Remote | July 2023 - Present</label>
                  <div className="rb-time">Part Time</div>
                  <p>
                  I contributed to the development and design of public web applications, backend APIs, and microservices. 
                  Integrated various APIs, including UK and Experian Data APIs, and implemented REST APIs while ensuring code quality. 
                  Particularly worked on the SEO improvement of the website and wrote content for the blog.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/experience/work3-logo.png" title="Work3 teknoloji a.ş" alt="Work3 teknoloji startup şirketi sakarya university teknokent" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>AI & Machine Learning Developer</h6>
                  <label>Work3 Teknoloji a.ş | Hybrid | September 2023 - Present</label>
                  <div className="rb-time">Part Time</div>
                  <p>
                  Currently, I am interning as an AI and ML developer while simultaneously gaining experience in hardware development.
                  I am working on a project that involves the development of a hybrid personalized diabetes care system that can be controlled via a mobile application.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/experience/sakarya-university-logo.png" title="Sakarya University SAU" alt="Sakarya University Turkiye Public University" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Final Year Computer Engineer Project</h6>
                  <label>Sakarya University | Hybrid | Jan 2023 - Jun 2023</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    With the help of my supervisor, and a colleague of mine, we worked on Ohara Bookshelf project that was amongst the best Final Year Projects in the Computer Engineering Department.
                    Ohara bookshelf is a smart books recommendations web application that allows users to create an account, add bookshelves to their library,
                    fork other users' bookshelves, and get smart books recommendations based on their emotions, preferences and interests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
