/* eslint-disable @next/next/no-img-element */
import { DetailedHTMLProps, HTMLAttributes } from "react";
import type { Project } from "../../constants";
import styles from "./style.module.css";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  project: Project;
  isOpen: boolean;
};

const ProjectCard = ({ isOpen, project, ...restProps }: Props) => {
  const { description, repos, subtitle, tech, title, imageUrl, url } = project;

  const Full = () => (
    <>
      {!!url && (
        <h3>
          See the demo: <a href={url}>{url}</a>
        </h3>
      )}
      {description.split("\n").map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <aside>
        <h3>Repos</h3>
        {repos.map((repo, key) => (
          <p key={key}>
            <a href={repo}>{repo}</a>
          </p>
        ))}
      </aside>
    </>
  );

  return (
    <article className={styles.container} {...restProps}>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      {isOpen && <Full />}
      <small>
        Built with:{" "}
        <ul className={styles.list}>
          {tech.map((item, index) => (
            <li key={index}>{item.toUpperCase()}</li>
          ))}
        </ul>
      </small>
      {!!imageUrl && <img src={imageUrl} alt={title} />}
    </article>
  );
};

export default ProjectCard;
