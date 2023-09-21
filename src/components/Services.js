import dynamic from "next/dynamic";

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
            <img className="theme-bg" src="static/img/services/web-developer.png" alt="Demba Sow Full stack web developer" />
              <div className="feature-content media-body">
                <h5>Web Developement</h5>
                <p>
                I specialize in HTML5, CSS3, JavaScript, React.js, Express.js, Next.js, Node.js, MongoDB, Python, and Django to create exceptional websites.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              {/* <i className="icon theme-bg icon-desktop" /> */}
              <img className="theme-bg" src="static/img/services/machine-learning.png" alt="Demba Sow Machine Learning Developer" />
              <div className="feature-content media-body">
                <h5>Machine Learning</h5>
                <p>
                I develop cutting-edge machine learning algorithms using tools like scikit-learn, NumPy, pandas, and NLTK.
                Currently I am working on a Diabetes care systems using ML algorithms with a team of 3 other people.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
            <img className="theme-bg" src="static/img/services/artificial-intelligence.png" alt="Demba Sow Artificial Intelligence Developer" />
              <div className="feature-content media-body">
                <h5>Artificial Intelligence</h5>
                <p>
                I have passion on AI algorithms development, Previously I have had 
                a decent amount of experience on tools including TensorFlow, PyTorch, OpenCV, NumPy, and OpenAI, enabling me to create intelligent solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <img className="theme-bg" src="static/img/services/content-writer.png" alt="Demba Sow Content Writer" />
              <div className="feature-content media-body">
                <h5>Content Writing &  SEO</h5>
                <p>
                I craft SEO-optimized website blogs to enhance your online presence and Search Engine Results Page (SERP) ranking.
                Previously, I have written more then 40 blogs for CarCheckUp company and it has improved its overall ranking on Google.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <img className="theme-bg" src="static/img/services/translator.png" alt="Demba Sow Translator" />
              <div className="feature-content media-body">
                <h5>Translation</h5>
                <p>
                Speaking 7 languages, I have hands-on experience in translating between French-Arabic, and English-Turkish. 
                Additionally, I provided multilingual customer service at a tourist aesthetics clinic in Istanbul, interacting with clients worldwide for 3 months.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <img className="theme-bg" src="static/img/services/language-teacher.png" alt="Demba Sow Language Teacher" />
              <div className="feature-content media-body">
                <h5>Language Teaching</h5>
                <p>
                 I currently teach english part time at Just English, to furcher boost my social skills, exhale my public speaking
                 and help people learn a new language. Helping others is a passion of mine, and I'm always looking for new ways to do so.
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
