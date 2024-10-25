import dynamic from "next/dynamic";
// import Image from "next/image";


const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>What I do?</h3>
        </div>

        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
            <img className="theme-bg" src="/static/img/services/machine-learning.png" alt="Demba Sow Full stack web developer" />
              <div className="feature-content media-body">
                <h5>AI & Machine Learning </h5>
                <p>
                I specialize in developing innovative machine learning algorithms and AI solutions tailored to real-world challenges. 
                With hands-on experience in frameworks such as TensorFlow and scikit-learn, 
                I focus on creating models that tackle real-world problems. 
                Currently, I'm working on a groundbreaking project, 'Optic Exam Reader,' aimed at revolutionizing OCR 
                technology by extracting comprehensive information from exam papers simply by taking a photo, without prior knowledge of their structure.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-desktop" /> */}
              <img className="theme-bg" src="/static/img/services/web-developer.png" alt="Demba Sow Machine Learning Developer" />
              <div className="feature-content media-body">
                <h5>Software Engineering & SEO</h5>
                <p>
                I am passionate about building dynamic, user-friendly web applications that meet client needs and enhance user experience. 
                Proficient in HTML5, CSS3, Tailwindcss, and frameworks like Next.js and Node.js, I develop responsive designs that function seamlessly across devices. 
                Alongside web development, I write SEO-optimized content and implement strategies to boost online visibility, helping businesses improve their rankings on search engines. 
                My approach combines technical expertise with creative solutions to ensure websites are both functional and engaging.
                </p>              
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
            <img className="theme-bg" src="/static/img/services/translator.png" alt="Demba Sow Artificial Intelligence Developer" />
              <div className="feature-content media-body">
                <h5>Sales & Multilingual Customer Support</h5>
                <p>
                  With fluency in six languages, including English, French, Turkish, Arabic, Portuguese, and Fulani, I excel in bridging communication gaps in diverse environments. 
                  My recent role in sales at a tourist company involved engaging with international clients, providing tailored travel solutions, and delivering exceptional customer 
                  service in both English and Turkish. This experience honed my ability to understand customer needs and create meaningful connections, 
                  while my background in translation enables me to effectively convey complex information across languages. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <img className="theme-bg" src="/static/img/services/language-teacher.png" alt="Demba Sow Content Writer" />
              <div className="feature-content media-body">
                  <h5>Language Teaching & Mentoring</h5>
                  <p>
                    As a passionate educator, I teach English and French, focusing on immersive learning experiences that boost language skills. 
                    I work with students from diverse backgrounds, helping them prepare for proficiency exams like TOEFL and IELTS. 
                    Through personalized mentoring sessions on platforms like Superprof and Preply, I provide tailored guidance on language acquisition, 
                    interview preparation, and communication strategies, instilling confidence and competence in my students.
                    My goal is to empower learners to excel in their language journey and achieve their personal goals.
                  </p>
              </div>
            </div>
          </div>

        </div>

      
        <div className="separated" />
        <Testimonials />
      </div>
    </section>
  );
};
export default Services;
