import React from "react"

const ProjectLink = ({ project }) => (
  <article className="card ">
    <a to={project.frontmatter.url}>
      {!!project.frontmatter.thumbnail && (
        <img src={project.frontmatter.thumbnail} alt={project.frontmatter.title + "- Featured Shot"} />
      )}
    </a>
    <header>
      <h2 className="project-title">
        <a to={project.frontmatter.url} className="project-link">
          {project.frontmatter.title}
        </a>
      </h2>
      <div className="project-description">
          {project.frontmatter.description}
      </div>
    </header>
  </article>
)
export default ProjectLink
