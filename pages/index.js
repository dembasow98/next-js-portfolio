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
                    {`I'm`} a recent computer engineering graduate with a strong passion for Full Stack Web Development 
                    and some experience in Machine Learning and AI. I write website content sometime.
                    My insatiable curiosity has driven me to learn 7 languages, 
                    including Fulani, English, French, Arabic, Turkish, Portuguese, and some Spanish,
                    enabling  me to connect with people from diverse cultures. I enjoy writing and, in my free time, 
                    I teach English to further enhance my social skills and communication abilities.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="resume/DEMBA-SOW_UK_FORMAT.pdf" download>
                      Donwload CV
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/personal/banner.png" title="" alt="" />
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
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });


  // return the data as props
  return {
    props: {
      posts,
      projects,
    },
  };

}



export default Index;
