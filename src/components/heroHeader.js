import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="hero-header">
        <div className="primary-content flex">
          <div className="primary-image">
            <img src="/assets/cutout.png" alt="Jordan Haines" />
          </div>
          <div className="primary-content-copy">
            <h1>👋🏾&nbsp;Hi I'm Jordan</h1>
            <p>{data.site.siteMetadata.home.description}</p>
            <p className="cool-links">
              During the day (and most nights) you can find me making students
              better writers as CTO of{" "}
              <a href="https://prompt.com" target="_blank">
                Prompt
              </a>{" "}
              where I lead an engineering team that works in Django, Vue/Vuex,
              React/Redux, and a slew of other really dope tech.
            </p>
          </div>
        </div>
      </div>
    )}
  />
);
