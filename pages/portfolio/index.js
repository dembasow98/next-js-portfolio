import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Layout from '../../src/layout/Layout'
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Portfolio = ({ portfolio }) => {


  //Sort the portfolio by date
  portfolio = portfolio?.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  //Test if the portfolio are loaded
  //console.log("All portfolio: " , portfolio);
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".portfolio-content", {
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Layout blog>
        <section
        id="work"
        data-nav-tooltip="Work"
        className="pp-section pp-scrollable section dark-bg"
        >
        <div className="container">
            <div className="title">
            <h3>My Portfolio.</h3>
            </div>
            <div className="portfolio-filter-01">
            <ul className="filter nav">
                <li
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
                data-filter="*"
                >
                ALL
                </li>
                <li
                className={`c-pointer ${activeBtn("web-development")}`}
                onClick={handleFilterKeyChange("web-development")}
                data-filter=".web-development"
                >
                WEB DEVELOPMENT
                </li>
                <li
                className={`c-pointer ${activeBtn("artificial-intelligence-machine-learning")}`}
                onClick={handleFilterKeyChange("artificial-intelligence-machine-learning")}
                data-filter=".artificial-intelligence-machine-learning"
                >
                AI & MACHINE LEARNING
                </li>
                <li
                className={`c-pointer ${activeBtn("content-writing")}`}
                onClick={handleFilterKeyChange("content-writing")}
                data-filter=".content-writing"
                >
                CONTENT WRITING
                </li>
                <li
                className={`c-pointer ${activeBtn("foreign-language")}`}
                onClick={handleFilterKeyChange("foreign-language")}
                data-filter=".foreign-language"
                >
                FOREIGN LANGUAGE
                </li>
            </ul>
            </div>
            <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
            {portfolio && portfolio.map((project) => (
                <>
                <div
                    key={project.slug}
                    className={`grid-item ${project?.categories?.join(" ")}`}
                >
                    <div className="portfolio-box-01">
                        <div className="portfolio-info">
                        <h5 className="white-color font-weight-bold">
                            {project.title}
                        </h5>
                        <span>{project.description}</span>
                        <div className="portfolio-links d-flex flex-row justify-content-between">
                            <div className="d-flex flex-row gap-2 align-items-center">
                                {project?.github && (
                                <Link href={project?.github}>
                                    <a target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i> Github
                                    </a>
                                </Link>
                                )}
                            </div>
                            <div className="d-flex flex-row gap-2 align-items-center">
                                <Link  href={`/portfolio/${project?.slug}`}>
                                <a>
                                    <i className="fas fa-eye"></i> Details
                                </a>
                                </Link>
                            </div>
                        </div>
                        </div>
                        <div className="portfolio-img">
                        <img src={project.banner} title={project.title} alt={project.title} />
                        </div>
                    </div>
                </div>
                {" "}
                </>
            ))}
            </div>
        </div>
        </section>
    </Layout>
  );
};



export async function getStaticProps() {
  
    const portfolioDirectory = path.join(process.cwd(), "portfolio");
    const fileNames = fs.readdirSync(portfolioDirectory);
  
    const portfolio = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(portfolioDirectory, fileName);
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
        portfolio,
      },
    };
}


export default Portfolio;