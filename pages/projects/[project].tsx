import type { GetServerSideProps, GetStaticPaths, NextPage } from "next";
import styles from "../../styles/Project.module.css";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../components/Layouts/HomeLayout";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import type { Project } from "../../constants";
import ProjectCard from "../../components/ProjectCard";

type QueryParams = ParsedUrlQuery & {
  project: string;
};

export const getStaticPaths: GetStaticPaths = async ({}) => {
  const projects = await import('../../constants').then(vars => vars.projects);
  return {
    paths: Object.keys(projects).map(key => ({ params: { project: key } })),
    fallback: false,
  }
}

export const getStaticProps: GetServerSideProps<
  Project,
  QueryParams
> = async ({ params }) => {
  const { project } = params!;
  const projects = await import('../../constants').then(vars => vars.projects);
  return { props: projects[project] };
};

const ProjectPage: NextPage<Project> = (project) => {
  return (
    <Layout className={styles.layout}>
      <Nav />
      <ProjectCard isOpen={true} project={project}/>
      <Footer />
    </Layout>
  );
};

export default ProjectPage;
