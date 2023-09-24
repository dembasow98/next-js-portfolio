import Link from "next/link";
//import Image from "next/image";

const Blog = ({posts}) => {

  posts = posts?.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  // Get the first 4 posts
  posts = posts?.slice(0, 4);

  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Latest Blog.</h3>
        </div>
        <div className="row">
          {
            posts?.map((post) => (
        
            <div className="col-md-6 m-15px-tb" key={post.slug}>
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href={`/blog/${post?.slug}`}>
                    <a>
                      <img src={post?.banner} title= {post?.title} alt= {post?.title}/>
                    </a>
                  </Link>
                </div>
                <div className="blog-info">
                  <div className="meta">
                  <div className="meta">{post?.date} - {post?.category} - {post?.comments?.count === 0?"0":post?.comments?.length} COMMENT(S)</div>
                  </div>
                  <h6>
                    <Link href={`/blog/${post?.slug}`}>
                      <a>
                        {post?.title}
                      </a>
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            ))
          }
          <div className="col-12 read-more-blog text-center">
            <Link href="/blog">
              <a className="px-btn px-btn-theme">More Blogs</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Blog;
