import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ProjectLink from "../components/projectLink";

const ContactPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  let projects = edges
    .filter((e) => e.node.frontmatter.template === "Project")
    .map((e) => e.node)
  projects.sort((one, two) => {
    if (one.frontmatter.title === "Prompt") {
      return -1
    }
    if (two.frontmatter.title === "Prompt") {
      return 1
    }
    return 0
  })
  return (
    <Layout className="page-timeline">
      <div className="page-timeline">
        <Helmet>
          <title>{site.siteMetadata.title} - Timeline</title>
          <meta name="description" content={site.siteMetadata.description} />
        </Helmet>
        <div>
          <div className="about-section">
            <div className="header">
              <h2 id="about">Timline</h2>
            </div>
            <div className="flex">
              <div className="about-timeline">
                <p>
                  I like history. And unlike reasonable historians, my penchant isn't relegated to a specific period -- I like <em>all</em> history (and pre-history, too).
                  You see, what I really like is exploring historic themes by delving deep into multiple specific histories (say, the American Revolution, or early Dutch Congo) and
                  finding common threads or serindipitous events happening at the same time in vastly different places.
                </p>
                <p>
                  I can only remember so much, so to really collate information from multiple histories I like to view them on a timeline. This is that timeline.
                  Below are relevant notes from books I've read and conversations I've had, tagged by subject and source.
                </p>
                <p>
                  If you've read this far then there's a good chance we're the same type of nerd and you will enjoy this page as much as I do.
                </p>
              </div>
            </div>
          </div>
          <div className="about-section contact">
            <div className="header">
              <h2 id="contact">🗣&nbsp;Let's Chat</h2>
              <p>
                The best way to contact me is{" "}
                <a href="https://twitter.com/jordanahaines">
                  definitely via Twitter
                </a>
                . But if you're into web forms that send emails, boy do I have
                the solution for you ⬇️
              </p>
              <form
                className="form-container"
                action="https://sendmail.w3layouts.com/SubmitContactForm"
                method="post"
                target="_blank"
              >
                <div className="flex">
                  <div>
                    <label htmlFor="w3lName">Name</label>
                    <input type="text" name="w3lName" id="w3lName" />
                  </div>
                  <div>
                    <label htmlFor="w3lSender">Email</label>
                    <input type="email" name="w3lSender" id="w3lSender" />
                  </div>
                </div>
                <div>
                  <label htmlFor="w3lSubject">Subject</label>
                  <input type="text" name="w3lSubject" id="w3lSubject" />
                </div>
                <div>
                  <label htmlFor="w3lMessage">Message</label>
                  <textarea name="w3lMessage" id="w3lMessage"></textarea>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <input
                    type="submit"
                    className="button -primary"
                    style={{ marginRight: 0 }}
                  />
                </div>
              </form>
            </div>
            <div className="about-section projects">
              <div className="header">
                <h2 id="projects">👨🏾‍🎨&nbsp;Recent Projects</h2>
              </div>
              <div className="projects-container">
                {projects.map((p) => (
                  <ProjectLink key={p.frontmatter.path} project={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
export const pageQuery = graphql`
  query TimelinePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            description
            template
          }
        }
      }
    }
  }
`;
