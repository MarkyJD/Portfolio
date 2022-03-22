import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SectionHeader from '../SectionHeader';
import Project from '../Project';
import { getImage } from 'gatsby-plugin-image';

export default function Projects() {
  const data = useStaticQuery(graphql`
    {
      projects: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { featured: { eq: true } } }
      ) {
        edges {
          node {
            frontmatter {
              tools
              title
              tech
              link
              github
              featured
              date
              cover {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            html
            id
          }
        }
      }
    }
  `);

  const projects = data.projects.edges.filter(({ node }) => node);

  return (
    <section className="max-w-screen-md mx-auto min-h-[50vh] pt-5 text-slate-300 mt-20">
      <SectionHeader title="Projects" prefix="02." id="projects" rtl />

      {projects.map(({ node }, i) => {
        const { frontmatter, html, id } = node;
        const { title, date, github, link, tech, cover, tools } = frontmatter;
        const image = getImage(cover);

        return (
          <div key={id} className="pt-10 ">
            <Project
              title={title}
              date={date}
              github={github}
              link={link}
              tech={tech}
              tools={tools}
              html={html}
              image={image}
              rtl={i % 2 === 0 ? true : false}
              last={i === projects.length - 1}
            />
          </div>
        );
      })}
    </section>
  );
}
