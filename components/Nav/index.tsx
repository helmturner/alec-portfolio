import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { gitHubUrl, linkedInUrl } from "../../constants";
import Button from "../Button";
import styles from "./style.module.css";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Nav = ({ className, ...restProps }: Props) => {
  return (
    <nav className={styles.nav} {...restProps}>
      <Button>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Button>
      <Button>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </Button>
      <Button>
        <a href={gitHubUrl}>Github</a>
      </Button>
      <Button>
        <a href={linkedInUrl}>LinkedIn</a>
      </Button>
      <Button>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
      </Button>
    </nav>
  );
};

export default Nav;
