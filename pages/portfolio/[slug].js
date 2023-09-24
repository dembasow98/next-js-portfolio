import Layout from "../../src/layout/Layout";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import Image from "next/image";
import Markdown from "markdown-to-jsx";

// Add this CSS to your component or a separate CSS file
/*
background: #000;
color: #fafffb;
*/
const customStyles = `
  .custom-code-block {
    background: #0e0f0e;
    color: #fafffb;
    color: #cfd4d1;
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;

export default function SingleProject ({project}){

  return (
  
    <Layout blog>
      <style>{customStyles}</style>
      <div className="single-blog">
        <div className="container d-flex flex-column align-items-center">
          <div className="blog-feature-img">
            <img src={project.banner} title={project.title} alt= {project.title} />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="article">
                <div className="article-title">

                    <div className="d-flex flex-row gap-2 align-items-center">
                        {
                          project?.categories && project.categories.map((category, index) => (
                              <span key={index}>
                                <a href="#">{category}</a>
                                <span className="px-2"></span>
                              </span>
                          ))
                        }
                    </div>
                  
                    <h2> {project.title}</h2>
                    <div className="media">
                        <div className="media-body">
                            <span>{project.date}</span>
                        </div>
                    </div>
                </div>
                <div className="article-content">
                  <Markdown>{project.content}</Markdown>
                </div>
                <div className="nav tag-cloud">
                  {project.tags.map((tag, index) => (
                    <a key={index} href="#">
                      {tag}
                    </a>
                  ))}
                </div>
              </article>
              <div className="contact-form article-comment">
                <h4>Leave a Reply</h4>
                <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="Name"
                          id="name"
                          placeholder="Name *"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="Email"
                          id="email"
                          placeholder="Email *"
                          className="form-control"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your message *"
                          rows={4}
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="send">
                        <button className="px-btn px-btn-theme">
                          <span>Submit</span> <i className="arrow" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>

  );
};




export async function getStaticPaths() {

  
  const projectsDirectory = path.join(process.cwd(), "projects");
  const fileNames = fs.readdirSync(projectsDirectory);

  const paths = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  const { slug } = params;

  const fullPath = path.join(process.cwd(), "projects", `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  
  // Replace code block markers (```) with a custom class
  const contentWithCustomStyles = matterResult.content.replace(
    /```(\w+)\n([\s\S]*?)\n```/g,
    '<pre className="custom-code-block">$2</pre>'
  );

  return {
    props: {
      project: {
        slug,
        ...matterResult.data,
        content: contentWithCustomStyles,
      },
    },
  };

}
