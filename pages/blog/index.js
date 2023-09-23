import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../../src/layout/Layout";
import { getPagination, pagination } from "../../src/utilits";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Blog = ({ posts }) => {
  
  let sort = 4;
  const [active, setActive] = useState(1);
  const [state, setState] = useState([]);
  useEffect(() => {
    pagination(".blog-list-item", sort, active);
    let list = document.querySelectorAll(".blog-list-item");
    setState(getPagination(list?.length, sort));
  }, [active]);

  return (
    <Layout blog>
      <div className="blog-listing" id="blog">
        <div className="container">
          <div className="title text-center">
            <h3>Our Blogs</h3>
          </div>
          <div className="row">
            {posts && posts?.map((post) => (
              <div key={post?.slug} className="col-md-6 m-15px-tb blog-list-item">
                <div className="blog-grid">
                  <div className="blog-img">
                    <Link href={`/blog/${post?.slug}`}>
                      <a>
                        <img src={`${post?.banner}`} title={`${post?.title}`} alt= {`${post?.title}`} />
                      </a>
                    </Link>
                  </div>
                  <div className="blog-info">
                    <div className="meta">{post?.date} - {post?.category} - {post?.comments?.count === 0?"0":post?.comments?.length} COMMENT(S)</div>
                    <h6>
                      <Link href={`/blog/${post?.slug}`}>
                        <a>{post?.title}</a>
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 blog-pagination">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${active == 1 ? "disabled" : ""}`}>
                  <a
                    className="page-link"
                    href="#"
                    tabIndex={-1}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(active === 1 ? 1 : active - 1);
                    }}
                  >
                    <i className="fas fa-chevron-left" />
                  </a>
                </li>
                {state && state.map((state, i) => (
                  <li
                    key={i}
                    className={`page-item ${active === state ? "active" : ""}`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(state);
                      }}
                    >
                      {state} <span className="sr-only">(current)</span>
                    </a>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    active == state?.length ? "disabled" : ""
                  }`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(
                        active === state?.length ? state?.length : active + 1
                      );
                    }}
                  >
                    <i className="fas fa-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  
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
      content: matterResult.content,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Blog;