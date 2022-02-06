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
    <Layout className="page-about">
      <div className="page-about">
        <Helmet>
          <title>{site.siteMetadata.title} - About &amp; Contact</title>
          <meta name="description" content={site.siteMetadata.description} />
        </Helmet>
        <div>
          <div className="about-section">
            <div className="header">
              <h2 id="about">👨🏽‍💻&nbsp;About Jordan</h2>
            </div>
            <div className="flex">
              <div className="about-image-container">
                <img alt="Jordan (and Zola)" src="/assets/jordan_and_z.jpeg" />
              </div>
              <div className="about-copy-container cool-links">
                <p>Wow - you really want to know more about me? Cool.</p>
                <p>
                  I'm a smug twenty-something exploring Brooklyn with my dog
                  (Gorgonzola) and exploring ways to make students better
                  writers with my company (
                  <a href="https://prompt.com">Prompt</a>). I like learning new
                  technologies (hence this site), and teaching with the amazing
                  crew at (<a href="https://codenation.org/">Code Nation</a>).
                </p>
                <p>
                  When not trying to improve the world with javascript (that's
                  the solution, right?), you can find me indulging my other
                  interests: economics, making the perfect dinner, and resisting
                  my partner's attempts to acquire additional dogs for our tiny
                  NYC apartment (she probably won't read this).
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
  query ContactPageQuery {
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
