import Layout from "../../src/layout/Layout";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

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

export default function SingleBlog ({post}){

  return (
  
    <Layout blog>
      <style>{customStyles}</style>
      <div className="single-blog">
        <div className="container d-flex flex-column align-items-center">
          <div className="blog-feature-img">
            <img src={post.banner} title={post.title} alt= {post.title} />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="article">
                <div className="article-title">
                  <h6>
                    <a href="#">{post.category}</a>
                  </h6>
                  <h2> {post.title}</h2>
                  <div className="media">
                    <div className="avatar">
                      <img 
                        src="/static/img/personal/icon.png" 
                        title="Demba Sow - Full Stack Web Developer - AI and Machine Learning Developer - Content Writer - Polyglot" 
                        alt="Demba Sow - Full Stack Web Developer - AI and Machine Learning Developer - Content Writer - Polyglot" 
                      />
                    </div>
                    <div className="media-body">
                      <label>{post.author}</label>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <Markdown>{post.content}</Markdown>
                </div>
                <div className="nav tag-cloud">
                  {post.keywords.map((keyword, index) => (
                    <a key={index} href="#">
                      {keyword}
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
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);

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

  const fullPath = path.join(process.cwd(), "posts", `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  // Replace code block markers (```language) with a custom class
  const contentWithCustomStyles = matterResult.content.replace(
    /```(\w+)\n([\s\S]*?)\n```/g,
    '<pre className="custom-code-block">$2</pre>'
  );

  return {
    props: {
      post: {
        slug,
        ...matterResult.data,
        content: contentWithCustomStyles,
      },
    },
  };

}
