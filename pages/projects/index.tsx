import type { GetStaticProps, NextPage } from "next";
import { type Project, projects, featuredProjects } from "../../constants";
import ProjectCard from "../../components/ProjectCard";
import Link from "next/link";

type PageProps = { projects: Project[] };

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const sortedProjects = new Array(featuredProjects.length).fill("");

  for (let project in projects) {
    if (featuredProjects.includes(project)) {
      sortedProjects[featuredProjects.indexOf(project)] = project;
      continue;
    }
    sortedProjects.push(project);
  }

  return { props: { projects: sortedProjects.map((name) => projects[name]) } };
};

const ProjectIndex: NextPage<PageProps> = ({ projects }) => {
  return (
    <>
      <h2>All Projects</h2>
      {projects.map((project, index) => (
        <Link key={index} href={`projects/${project.slug}`}>
          <a>
            <ProjectCard key={index} isOpen={false} project={project} />
          </a>
        </Link>
      ))}
    </>
  );
};



export default ProjectIndex;
