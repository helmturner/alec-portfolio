import Image from "next/future/image";
import Link from "next/link";
import mustacheImage from "../../public/images/Mustache-Silhouette-2.svg";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { gitHubUrl, linkedInUrl } from "../../constants";
import styles from "./style.module.css";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Header = ({ className, ...restProps }: Props) => {
  return (
    <header className={styles.header}>
    <div className={`${styles.image} ${styles.stacked}`}>
      <Image src={mustacheImage} priority={true} placeholder="empty" alt="AlecVision" />
    </div>
    <h1 className={`${styles.title} ${styles.stacked}`}>
      <small>{"You're watching"}</small>
      <br />
      <strong>AlecVision</strong>
    </h1>
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/resume">
        <a>Resume</a>
      </Link>
      <a href={gitHubUrl}>Github</a>
      <a href={linkedInUrl}>LinkedIn</a>
    </nav>
  </header>
  );
};

export default Header;
