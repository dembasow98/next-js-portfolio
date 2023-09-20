import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">DEMBA SOW</h1>
                  <p className="lead">
                    A Passionate <TypingAnimation />
                  </p>
                  <p className="desc">
                    I'm a recent computer engineering graduate with a strong passion for Full Stack Web Development 
                    and some experience in Machine Learning and AI. I write website content sometime.
                    My insatiable curiosity has driven me to learn 7 languages, 
                    including Fulani, English, French, Arabic, Turkish, Portuguese, and some Spanish,
                    enabling  me to connect with people from diverse cultures. I enjoy writing and, in my free time, 
                    I teach English to further enhance my social skills and communication abilities.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="#">
                      Donwload CV
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/home-banner.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      <Portfolio />
      {/* End Portfolio */}
      {/* Blog */}
      <Blog />
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default Index;
