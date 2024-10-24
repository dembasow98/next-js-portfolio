import dynamic from "next/dynamic";
import About from "../src/components/About";
const Blog = dynamic(() => import("../src/components/Blog"), {
  ssr: false,
});
import Contact from "../src/components/Contact";
import ParticlesBackground from "../src/components/ParticlesBackground";
import TypingAnimation from "../src/components/TypingAnimation";
import Services from "../src/components/Services";
import Layout from "../src/layout/Layout";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Index = ({posts, projects}) => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          {/* <div id="particles-box" className="particles" /> */}
          <ParticlesBackground />
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Whalecome, I am</h6>
                  <h1 className="font-alt">DEMBA SOW</h1>
                  <p className="lead">
                    A Passionate <TypingAnimation />
                  </p>
                  <p className="desc">
                    {`I'm`} a Recent Computer Engineer Graduate From Sakarya University. Proficient in Python, C++ and robust in JavaScript Frameworks Such as Next.js, Node.js and Express.js. With over 2 years of experience in AI,
                     and machine learning, good in software engineering. I am Enthusiastic about LLM, Generative AI, NLP and Skilled in designing and implementing AI models, including data preparation, labelling, model training, and testing. 
                     Experienced in image processing, natural language processing, computer vision, and clean code principles using OOP design patterns. 
                     Culturally diverse with a background as President of the Mauritanian Student Federation, an Erasmus exchange student for 2 semesters & Erasmus+ Internship for 3 months, now I serve as Türkiye Maarif Foundation Student Graduate Leader. 
                     Seeking opportunities to leverage my expertise in developing scalable machine learning solutions to solve complex problems in industry. 
                     Currently Enrolled as AI & Data Science Masters Student & Teaching Assistant at Özyeğin University.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="/static/resume/demba-sow-junior-machine-learning-engineer.pdf" download>
                      Donwload my CV
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="/static/img/personal/banner.png" title="Demba Sow Banner" alt="Demba Sow Banner" />
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
      <Portfolio projects={projects} />
      {/* End Portfolio */}
      {/* Blog */}
      <Blog posts={posts} />
      {/* End Blog */}
      {/* Contact us */}
      <Contact />

    </Layout>
  );
};

// this function is called during build time to ensure that the page has all the required data to render
export async function getStaticProps() {

  // get posts

  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      ...matterResult.data,
    };
  });

  // get projects
  const projectsDirectory = path.join(process.cwd(), "projects");
  const projectFileNames = fs.readdirSync(projectsDirectory);

  const projects = projectFileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      ...matterResult.data,
    };
  });


  // return the data as props
  return {
    props: {
      projects,
      posts,
    },
  };

}



export default Index;
