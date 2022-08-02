import Image from "next/future/image";
import Link from "next/link";
import mustacheImage from "../../public/images/Mustache-Silhouette-2.svg";
import linkedin from "../../public/images/LinkedIn-Logos/LI-In-Bug.png";
import octocat from "../../public/images/GitHub-Mark/GitHub-Mark-Light-32px.png";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { gitHubUrl, linkedInUrl } from "../../constants";
import styles from "./style.module.css";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Header = (_props: Props) => {
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.heroimage} ${styles.dark} ${styles.stacked}`}>
          <Image
            src={mustacheImage}
            priority={true}
            placeholder="empty"
            alt="AlecVision"
          />
        </div>
        <h1 className={`${styles.title} ${styles.stacked}`}>
          <small>{"You're watching"}</small>
          <br />
          <strong>AlecVision</strong>
        </h1>
      </header>

      <nav className={`${styles.nav}`}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
        <a href={gitHubUrl}>
          <span className={styles.light}>
            <Image alt="GitHub" src={octocat} height={32} width={32} />
          </span>
        </a>
        <a href={linkedInUrl}>
          <Image alt="LinkedIn" src={linkedin} height={32} width={32} />
        </a>
      </nav>
    </>
  );
};

export default Header;
